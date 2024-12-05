import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButton, IonInput } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { chevronBackOutline, callOutline } from 'ionicons/icons';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.page.html',
  styleUrls: ['./forgot-password-page.page.scss'],
  standalone: true,
  imports: [ IonInput, IonButton, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule]
})

export class ForgotPasswordPagePage {
  forgetForm!: FormGroup
  data: any
  visible: any
  
  constructor(private navCtrl: NavController, public router: Router, private route: ActivatedRoute) {
    addIcons({chevronBackOutline,callOutline});

    this.forgetForm = new FormGroup({
      phone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)])
    });

    //
    this.data = route.snapshot.paramMap.get('data')
    
    
    if(this.data == 'login'){
      console.log(this.visible, ' 1');
      this.visible = true
    }
    else {
      console.log(this.visible, ' 2');
      
      this.visible = false
    }
  }

  goBack(): void {
    this.navCtrl.back(); // Programmatically go back
  }

  onSubmit() {
    console.log(this.forgetForm.valid);
    
    if(this.forgetForm.valid)
    {
      const number = this.forgetForm.value
      console.log(this.forgetForm.value);
      // this.visible = !this.visible
      this.router.navigate(['/login-page'])
    }
  }

  onSend() {
    console.log(this.forgetForm.valid);
    
    if(this.forgetForm.valid)
    {
      const number = this.forgetForm.value
      console.log(this.forgetForm.value);
      this.visible = !this.visible
      this.router.navigate(['/otp-page', {data: 'forget', phonenumber: number.phone}])
    }
  }
}
