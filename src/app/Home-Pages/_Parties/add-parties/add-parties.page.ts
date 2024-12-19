import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-add-parties',
  templateUrl: './add-parties.page.html',
  styleUrls: ['./add-parties.page.scss'],
  standalone: true,
  imports: [ IonButton, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AddPartiesPage {

  constructor() { }

}
