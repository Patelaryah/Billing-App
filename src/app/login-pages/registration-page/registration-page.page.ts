import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, } from '@angular/forms';
import { IonContent, IonInput, IonButton, IonIcon, IonCheckbox, IonFooter, IonHeader } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, lockClosedOutline, eyeOffOutline, eyeOutline, personCircleOutline, chevronForwardOutline, arrowForwardOutline, callOutline } from 'ionicons/icons';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular'

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.page.html',
  styleUrls: ['./registration-page.page.scss'],
  standalone: true,
  imports: [ IonHeader, IonFooter, IonCheckbox,  IonIcon, IonInput, IonContent, CommonModule, 
    FormsModule, IonButton, ReactiveFormsModule ],
})
export class RegistrationPagePage {

  isToastOpen = false;
  ischecked = true
  passwordVisible: boolean = false;
  pass = false;
  loginForm: FormGroup;
  
  constructor(private router: Router, private toastController: ToastController) {
    addIcons({personCircleOutline,callOutline,mailOutline,lockClosedOutline,arrowForwardOutline,chevronForwardOutline,eyeOutline,eyeOffOutline});

    this.loginForm = new FormGroup({
      fullname: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), 
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
      ]),
      confirmpassword: new FormControl('', [Validators.required, Validators.minLength(8), 
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
      ]),
    });
  }

     // password and C-password validation
     passwordMatchValidator() {
      const password = this.loginForm.get('password')?.value;
      const confirmPassword = this.loginForm.get('confirmpassword')?.value;
      if(password != '' && confirmPassword != ''){
        return password === confirmPassword;
      }
      else {return false}
    }

    // on focus out thrn accure in CPassword
    passwordsDoNotMatch = ''
    helpervisible = true
    onInputBlur() {
      if(this.passwordMatchValidator()){
        this.passwordsDoNotMatch = ''
        this.helpervisible = true        
      }
      else {
        this.passwordsDoNotMatch = 'Password not match'
        this.helpervisible = false
      }
    }

  // open close eye icon
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

    // on forcus the password input then show eye icon
  onPasswordChange() {
    this.pass = true;
  }
  
  // on check button enable
  checked(event: any): void {
    this.ischecked = !event.detail.checked;
  }

  // on submit check valid or not then send data
  istextvisible = false
  onSubmit(){
    const password = this.loginForm.get('password')?.value;
    const confirmPassword = this.loginForm.get('confirmpassword')?.value;
    if(password == confirmPassword)
    {  

      if(this.loginForm.valid){
        this.istextvisible = false
        const data = this.loginForm.value
        console.log(this.loginForm.value)
        this.showToast()
        this.router.navigate(['/otp-page', {data: 'registration', phonenumber: data.phone}])
        this.istextvisible = false

      }
      else {
        this.istextvisible = true
        console.log("not valid");
      }
    }
  }

  // goto login page
  goToLogin() {
    this.router.navigate(['login-page']);
  }

  // toast show
  showToast() { 
    this.toastController.create({ 
      // header: 'Navigation Complete', 
      message: 'You have navigated to a new page!', 
      duration: 3000, 
      position: 'bottom' ,
      cssClass: 'custom-toast',
    }).then((toast) => { toast.present(); }); 
  }

}

