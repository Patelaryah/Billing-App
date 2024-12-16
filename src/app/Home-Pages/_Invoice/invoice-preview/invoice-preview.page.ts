import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-invoice-preview',
  templateUrl: './invoice-preview.page.html',
  styleUrls: ['./invoice-preview.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonIcon, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InvoicePreviewPage {
  invoice_no: any = ''
  name: any = ''
  payment: any = ''
  date: any = ''
  money: any = ''

  constructor(private navCtrl: NavController, private route: ActivatedRoute) { 
    addIcons({chevronBackOutline});

    this.invoice_no = route.snapshot.paramMap.get('invoice_no')
    this.name = route.snapshot.paramMap.get('name')
    this.payment = route.snapshot.paramMap.get('payment')
    this.date = route.snapshot.paramMap.get('date')
    this.money = route.snapshot.paramMap.get('money')
    
    console.log(this.invoice_no, this.name, this.payment, this.date, this.money);
    
  }

  goBack(): void {
    this.navCtrl.back(); // Programmatically go back
  }



}
