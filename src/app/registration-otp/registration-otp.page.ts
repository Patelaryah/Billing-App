import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButton, IonButtons, IonBackButton, IonCard, IonInput, IonCol, IonRow } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, arrowForwardOutline } from 'ionicons/icons';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration-otp',
  templateUrl: './registration-otp.page.html', //'./registration-otp.page.html',
  styleUrls: ['./registration-otp.page.scss'],
  standalone: true,
  imports: [IonInput, IonCard, IonButton, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegistrationPage2Page implements OnInit, OnDestroy {

  number: any
  role: any
  constructor(private navCtrl: NavController, private router: Router, private route: ActivatedRoute) {
    addIcons({chevronBackOutline,arrowForwardOutline});

    // data from registration
    this.role = this.route.snapshot.paramMap.get('data') || ''
    this.number = this.route.snapshot.paramMap.get('phonenumber') || 1234567890
   }
   
  moveFocus(event: any, currentInput: any, nextInput: any, previousInput: any) {
    const inputType = event.inputType || event.target.inputType; // Capture the input type
    const currentValue = currentInput.value; // Current input value
  
    // Move to the next input when a character is entered
    if (currentValue.length === 1 && nextInput) {
      nextInput.setFocus();
    }
    // console.log(inputType);
    
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
    console.log('ok');
    console.log(number); 
  }

  minutes: string = '00';
  seconds: string = '59';
  timerInterval: any;
  timerVisible = true

  ngOnInit() {
    this.startTimer(); // Start the timer when the component initializes
  }

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

        this.minutes = this.formatTime(mins);
        this.seconds = this.formatTime(secs);

        totalSeconds--; // Decrement the timer
      } else {
        this.timerVisible = false
        clearInterval(this.timerInterval); // Stop the timer when it reaches 0
      }
    }, 1000); // Update every second
  }

  formatTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`; // Add leading zero if needed
  }

  combineInputs(input1: any, input2: any, input3: any, input4: any) {
    
    if(input1.value && input2.value && input3.value && input4.value){
      const combinedValue = `${input1.value}${input2.value}${input3.value}${input4.value}`;
      console.log('Combined Value:', combinedValue);
      this.router.navigate(['login-page']);
    }
    else
    {
      console.log("otp is not valid");
    }
  }

}
