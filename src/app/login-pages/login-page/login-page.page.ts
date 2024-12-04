import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonInput, IonItem, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, lockClosedOutline, eyeOffOutline, eyeOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
  standalone: true,
  imports: [IonIcon, IonItem, IonInput, IonContent, CommonModule, FormsModule, IonButton, ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class LoginPagePage{

  loginForm: FormGroup;

  constructor(private router: Router) {
    addIcons({mailOutline, lockClosedOutline ,eyeOutline, eyeOffOutline});

    this.loginForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
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
    if(this.loginForm.valid){console.log(this.loginForm.value)}
    else {
      console.log("not valid");
    }
  }

  // goto registration page
  goToRegistration() {
    this.router.navigate(['registration-page']);
  }

  // goto forget-password page 
  goToForget() {
    this.router.navigate(['forgot-password-page']);
  }

}
