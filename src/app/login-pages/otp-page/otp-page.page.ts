import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButton, IonCard, IonInput } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, arrowForwardOutline } from 'ionicons/icons';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.page.html',
  styleUrls: ['./otp-page.page.scss'],
  standalone: true,
  imports: [ IonInput, IonCard, IonButton, IonIcon, IonContent, IonHeader, 
    IonTitle, IonToolbar, CommonModule, FormsModule ]
})
export class RegistrationPage2Page implements OnInit, OnDestroy {

  validation = ''
  number: any
  // check from which page it redirect
  role: any
  constructor(private navCtrl: NavController, private router: Router, private route: ActivatedRoute) {
    addIcons({chevronBackOutline,arrowForwardOutline});

    // data from registration, forget page
    this.role = this.route.snapshot.paramMap.get('data') || ''
    this.number = this.route.snapshot.paramMap.get('phonenumber') || 1234567890
   }
   
  // when on input redirect to next input
  moveFocus(event: any, currentInput: any, nextInput: any, previousInput: any) {
    const inputType = event.inputType || event.target.inputType; // Capture the input type
    const currentValue = currentInput.value; // Current input value
  
    // Move to the next input when a character is entered
    if (currentValue.length === 1 && nextInput) {
      nextInput.setFocus();
    }

    // Move to the previous input when backspace is pressed and the current input is empty
    if (currentValue.length === 0 && previousInput && inputType === 'deleteContentBackward') {
      previousInput.setFocus();
    }
  }
  
   // go back button
   goBack(): void {
    this.navCtrl.back(); // Programmatically go back
  }

  resend_otp(number: number){
    // number for resend otp
    console.log(number);
    // clear time
    clearInterval(this.timerInterval);
    // restart time
    this.startTimer();
  }

  // variable which need for time
  minutes: string = '00';
  seconds: string = '59';
  timerInterval: any;
  timerVisible = true

  ngOnInit() {
    // call at initialize time
    this.startTimer(); // Start the timer when the component initializes
  }
  // clear the meamory
  ngOnDestroy() {
    // Clear the interval when the component is destroyed
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  startTimer() {
    let totalSeconds = 59; // Set the countdown starting point in seconds

    this.timerInterval = setInterval(() => {
      if (totalSeconds >= 0) {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;

        this.minutes = mins.toString()+'0'
        if(secs < 10)
        {
          this.seconds = '0'+secs.toString()
        }
        this.seconds = secs.toString()
        totalSeconds--; // Decrement the timer
      } 
      else {
        this.timerVisible = false
        clearInterval(this.timerInterval); // Stop the timer when it reaches 0
      }
    }, 1000); // Update every second
  }
  
  // get all input data then validate and redirect to next page based on role
  combineInputs(input1: any, input2: any, input3: any, input4: any) {
    if(this.role == 'registration'){
      if(input1.value && input2.value && input3.value && input4.value){
        const combinedValue = `${input1.value}${input2.value}${input3.value}${input4.value}`;
        console.log('Combined Value:', combinedValue);
        this.validation = ''
        this.router.navigate(['login-page']);
      }
      else
      {
        this.validation = 'OTP is not Valid';
      }
    }
    else if(this.role == 'forget'){
      if(input1.value && input2.value && input3.value && input4.value){
        const combinedValue = `${input1.value}${input2.value}${input3.value}${input4.value}`;
        console.log('Combined Value:', combinedValue);
        this.validation = ''
        this.router.navigate(['forgot-password-page']);
      }
      else
      {
        this.validation = 'OTP is not Valid'
      }
    }
    else {
      console.log("Error");
    }
  }


}
