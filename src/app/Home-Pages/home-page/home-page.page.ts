import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonContent, IonToolbar, IonMenu, IonHeader, IonButtons, IonTitle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { notificationsOutline, clipboard, add, personCircleOutline, people } from 'ionicons/icons';
import { RouterModule } from '@angular/router';
import { NotificationPage } from "../notification/notification.page";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
  standalone: true,
  imports: [IonTitle, IonButtons, IonHeader, IonToolbar, IonContent, IonIcon, RouterModule,
    IonTabButton, IonTabBar, IonTabs, CommonModule, FormsModule, IonMenu],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePagePage {


  constructor() {
    addIcons({notificationsOutline,add,clipboard,people,personCircleOutline});
  }

  // change heading name by changing tab
  heading = ''
  fixbtn = true;
  logTabName(event: any) {
    const selectedTab = event.tab;
    if(selectedTab == 'invoice'){
      this.heading = 'Invoice'
      this.fixbtn = true;
    }
    else if (selectedTab == 'parties'){
      this.heading = 'Parties'
      this.fixbtn = true;
    }
    else if (selectedTab == 'profile'){
      this.heading = 'Profile'
      this.fixbtn = false;
    }
    console.log('Selected Tab:', selectedTab);
  }

}
