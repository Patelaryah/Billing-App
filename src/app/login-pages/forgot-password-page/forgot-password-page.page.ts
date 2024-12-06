import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButton, IonInput, IonItem } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { chevronBackOutline, callOutline, lockClosedOutline } from 'ionicons/icons';
import { ToastController } from '@ionic/angular'

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.page.html',
  styleUrls: ['./forgot-password-page.page.scss'],
  standalone: true,
  imports: [ IonInput, IonButton, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, 
    CommonModule, FormsModule, ReactiveFormsModule ]
})

export class ForgotPasswordPagePage {

  forgetFormN: FormGroup
  forgetFormP: FormGroup
  data: any
  
  visible: any
  
  constructor(private navCtrl: NavController, public router: Router, private route: ActivatedRoute, private toastController: ToastController) {
    addIcons({chevronBackOutline,lockClosedOutline,callOutline});

    this.forgetFormN = new FormGroup({
      phone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
    });

    this.forgetFormP = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(8), 
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
      ]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8), 
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
      ]),
    });

    // get from login page for show phone or password ui
    this.data = route.snapshot.paramMap.get('data')
    
    if(this.data == 'login'){
      this.visible = true
    }
    else {
      this.visible = false
    }
    console.log(this.visible);
  }

   // password and C-password validation
   passwordMatchValidator() {
    const password = this.forgetFormP.get('password')?.value;
    const confirmPassword = this.forgetFormP.get('confirmPassword')?.value;
    if(password != '' && confirmPassword != ''){
      return password === confirmPassword;
    }
    else {return false}
  }

  // on focus off show error in confirm password
  passwordsDoNotMatch = ''
  helpervisible = true
  onInputBlur() {
    if(this.passwordMatchValidator()){
      this.passwordsDoNotMatch = ''
      this.helpervisible = true
    }
    else {
      this.passwordsDoNotMatch = 'Password not matched'
      this.helpervisible = false
    }
  }
  // when view show then call this function
  ionViewWillEnter() {
    if(this.data == 'login'){
      this.visible = true
    }
    else {
      this.visible = false
    }  
  }

  // go back
  goBack(): void {
    
    setTimeout(() => {
      this.visible = !this.visible
    }, 1000);
    console.log(this.visible);
    this.navCtrl.back(); // Programmatically go back
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

  // set new password then go login page
  onSubmit() {
    console.log(this.forgetFormP.valid);
    
    if(this.forgetFormP.valid)
    {
      const number = this.forgetFormP.value
      console.log(this.forgetFormP.value);
      this.showToast('Your Password has been changed')
      this.router.navigate(['/login-page'])
    }
    else {
      console.log("error");
    }
  }

  // go to otp page and switch ui phone to password
  onSend() {
    console.log(this.forgetFormN.valid);
    console.log(this.forgetFormN.value);
    
    if(this.forgetFormN.valid)
    {
      const number = this.forgetFormN.value
      console.log(this.forgetFormN.value);
      this.visible = !this.visible
      this.showToast('OTP Sended')
      this.router.navigate(['/otp-page', {data: 'forget', phonenumber: number.phone}])
    }
    else {
      console.log("error");
      
    }
  }

    // toast show
    showToast(text: string) { 
      this.toastController.create({ 
        // header: 'Navigation Complete', 
        message: text, 
        duration: 3000, 
        position: 'bottom' ,
        cssClass: 'custom-toast',
      }).then((toast) => { toast.present(); }); 
    }
}
