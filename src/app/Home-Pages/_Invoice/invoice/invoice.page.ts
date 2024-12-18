import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonSegmentButton, IonSegment, IonSegmentView, IonSegmentContent } from '@ionic/angular/standalone';
import { AppDataService } from 'src/app/Storage/app-data.service';
import { Router } from '@angular/router';


export interface Data {
  invoice_no: number;
  name: string;
  payment: string;
  date: string;
  money: number;
}

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
  standalone: true,
  imports: [IonSegment, IonSegmentButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, 
    FormsModule, IonSegmentView, IonSegmentContent, IonCard, IonCardHeader, IonCardContent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class InvoicePage {

  isnull1 = false
  isnull2 = false
  isnull3 = false
  status: string = 'paid';
  data: Data[] = 
  [
    {
      invoice_no: 101,
      name: 'John Doe',
      payment: 'paid',
      date: '2024-12-16',
      money: 200
    },
    {
      invoice_no: 102,
      name: 'Jane Smith',
      payment: 'overdue',
      date: '2024-11-30',
      money: 300
    },
    {
      invoice_no: 103,
      name: 'John Doe',
      payment: 'paid',
      date: '2024-12-16',
      money: 200
    },
    {
      invoice_no: 104,
      name: 'Jane Smith',
      payment: 'overdue',
      date: '2024-11-30',
      money: 300
    },
    {
      invoice_no: 105,
      name: 'John Doe',
      payment: 'paid',
      date: '2024-12-16',
      money: 200
    },
    {
      invoice_no: 106,
      name: 'Jane Smith',
      payment: 'overdue',
      date: '2024-11-30',
      money: 300
    },
  ];

  data1: Data[] = [
    {
      invoice_no: 101,
      name: 'John Doe',
      payment: 'paid',
      date: '2024-12-16',
      money: 200
    },
  ]

  constructor(private appDataService: AppDataService, private router: Router) {
    this.isnull1 = true
    this.isnull2 = true
    this.isnull3 = true
   }

  oncardClick(invoice_no: any, name: any, payment: any, date: any, money: any) {
    this.router.navigate(['invoice-preview', 
      {
        invoice_no: invoice_no,
        name: name,
        payment: payment,
        date: date,
        money: money,
        isActive: true
    }]);
  }

}
