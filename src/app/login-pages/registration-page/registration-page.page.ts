import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, } from '@angular/forms';
import { IonContent, IonInput, IonItem, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, lockClosedOutline, eyeOffOutline, eyeOutline, personCircleOutline, chevronForwardOutline, arrowForwardOutline, callOutline } from 'ionicons/icons';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular'

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.page.html',
  styleUrls: ['./registration-page.page.scss'],
  standalone: true,
  imports: [IonIcon, IonInput, IonContent, CommonModule, FormsModule, IonButton, ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class RegistrationPagePage {

  isToastOpen = false;
  ischecked = true
  passwordVisible: boolean = false;
  pass = false;
  loginForm: FormGroup<any>;
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
    },
    {
      validators: this.passwordMatchValidator
    }
    );
  }

  // password and C-password validation
  passwordMatchValidator(group: AbstractControl) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmpassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
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
    if(this.loginForm.valid){
      this.istextvisible = false
      const data = this.loginForm.value
      console.log(this.loginForm.value)
      this.showToast()
      this.router.navigate(['/otp-page', {data: 'registration', phonenumber: data.phone}])
    }
    else {
      this.istextvisible = true
      console.log("not valid");
    }
  }

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
    }).then((toast) => { toast.present(); }); }

}

