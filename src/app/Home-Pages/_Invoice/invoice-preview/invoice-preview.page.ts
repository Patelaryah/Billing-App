import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonTextarea, IonInput, IonItem } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, downloadOutline, shareSocial } from 'ionicons/icons';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-invoice-preview',
  templateUrl: './invoice-preview.page.html',
  styleUrls: ['./invoice-preview.page.scss'],
  standalone: true,
  imports: [ IonTextarea, IonCol, IonRow, IonGrid, IonIcon, IonButton, IonContent, IonHeader, 
    IonTitle, IonToolbar, CommonModule, FormsModule ]
})
export class InvoicePreviewPage {
  invoice_no: any = ''
  name: any = ''
  payment: any = ''
  date: any = ''
  money: any = ''
  isActive: any


  items = [
    { description: 'First Item', qty: 1, subtotal: 20000 },
    { description: 'Second Item', qty: 1, subtotal: 20000 },
    // Add more items as needed
  ];

  constructor(private navCtrl: NavController, private route: ActivatedRoute) { 
    addIcons({chevronBackOutline,downloadOutline,shareSocial});

    this.invoice_no = route.snapshot.paramMap.get('invoice_no')
    this.name = route.snapshot.paramMap.get('name')
    this.payment = route.snapshot.paramMap.get('payment')
    this.date = route.snapshot.paramMap.get('date')
    this.money = route.snapshot.paramMap.get('money')
    this.isActive = route.snapshot.paramMap.get('isActive')
    
    console.log(this.invoice_no, this.name, this.payment, this.date, this.money);
    
  }

  goBack(): void {
    this.navCtrl.back(); // Programmatically go back
  }



}
