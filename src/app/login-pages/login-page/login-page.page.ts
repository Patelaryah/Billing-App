import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonInput, IonItem, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, lockClosedOutline, eyeOffOutline, eyeOutline } from 'ionicons/icons';
import { ActivatedRoute, Router } from '@angular/router';
import { AppDataService } from 'src/app/Storage/app-data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
  standalone: true,
  imports: [IonIcon, IonItem, IonInput, IonContent, CommonModule, FormsModule, IonButton, 
    ReactiveFormsModule,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class LoginPagePage implements OnInit {

  loginForm: FormGroup;

  // show incorrect user in red color
  validation = ''

  constructor(private router: Router, private route: ActivatedRoute, private appDataService: AppDataService) {
    addIcons({mailOutline, lockClosedOutline ,eyeOutline, eyeOffOutline});

    this.loginForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('', [Validators.required, Validators.email])
    });

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.load();
      }, 0);
  }

  async load() {
    let data: any = await this.appDataService.get('startup');
    if(data == undefined || data == true){
      this.router.navigate(['start-page1']);
    }
  }

  // open close eye icon
  passwordVisible: boolean = false;
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  // on forcus the password input then show eye icon
  pass = false;
  onPasswordChange() {
    this.pass = true;
  }

  // submit button (login)
  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      
      this.router.navigate(['home/invoice'])
    }
    else {
      this.validation = 'Incorrect Username or Password'
    }
  }

  // goto registration page
  goToRegistration() {
    this.router.navigate(['registration-page']);
  }

  // goto forget-password page 
  goToForget() {
    // data for forget page render ui
    this.router.navigate(['forgot-password-page' , {data: 'login'}]);
  }

}
