import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-invoice-preview',
  templateUrl: './invoice-preview.page.html',
  styleUrls: ['./invoice-preview.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InvoicePreviewPage {

  constructor(private navCtrl: NavController, private route: ActivatedRoute) { 
    addIcons({chevronBackOutline});

    let data = route.snapshot.paramMap.get('invoice_no')
    console.log(data);
    
  }

  goBack(): void {
    this.navCtrl.back(); // Programmatically go back
  }

}
