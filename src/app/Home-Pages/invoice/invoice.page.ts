import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { AppDataService } from 'src/app/Storage/app-data.service';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton ]
})
export class InvoicePage {

  value: any = '';
  constructor(private appDataService: AppDataService) { }

  async setValue()
  {
    await this.appDataService.set('country', 'India')
  }
  async getValue()
  {
    this.value = await this.appDataService.get('country')
  }
  async removeValue()
  {
    await this.appDataService.remove('country')
  }
  async clearStorage()
  {
    await this.appDataService.clear()
  }
}
