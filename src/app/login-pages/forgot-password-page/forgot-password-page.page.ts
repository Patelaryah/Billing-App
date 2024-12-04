import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButton, IonInput, IonCard } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { chevronBackOutline, callOutline } from 'ionicons/icons';
import { routes } from 'src/app/app.routes';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.page.html',
  styleUrls: ['./forgot-password-page.page.scss'],
  standalone: true,
  imports: [ IonInput, IonButton, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule]
})
export class ForgotPasswordPagePage {
  forgetForm!: FormGroup

  constructor(private navCtrl: NavController, public router: Router) {
    addIcons({chevronBackOutline,callOutline});

    this.forgetForm = new FormGroup({
      phone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)])
    }
    );
  }

  goBack(): void {
    this.navCtrl.back(); // Programmatically go back
  }

  onSubmit() {
    if(this.forgetForm.valid)
    {
      console.log(this.forgetForm.value);
      this.router.navigate(['/registration-page-2', {data: 'forget'}])
    }
  }
}
