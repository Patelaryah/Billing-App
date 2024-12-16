import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonIcon, IonLabel, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBack, chevronForward } from 'ionicons/icons';
import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router';
import { AppDataService } from 'src/app/Storage/app-data.service';

register();

@Component({
  selector: 'app-start-page1',
  templateUrl: './start-page1.page.html',
  styleUrls: ['./start-page1.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonLabel, IonIcon, IonButton, IonContent, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StartPage1Page {
  // show/hide some content
  isvisible = true
  // hide and show 'get started' btn
  clickbtn = false;
  // show and hide skip btn
  currentIndex: number = 0;
  // images list
  images: string[] = [
    '../../../assets/Images/Start-Page-1.png',
    '../../../assets/Images/Start-Page-2.png',
    '../../../assets/Images/Start-Page-3.png',
  ];

  constructor(private router: Router, private appDataService: AppDataService) {
    addIcons({ chevronBack, chevronForward });
    // let data: any
    // (async () => {
    //   data = await this.appDataService.get('startup');
    //   console.log('str: ',data);
    // })();
    
    

  }
  // when user swipe then occure
  onSlideChange() {
    const swiperContainer = document.querySelector('swiper-container');
    if (swiperContainer) {
      if(swiperContainer?.swiper.activeIndex == this.images.length-1) {
        this.clickbtn = true
      }
      if(swiperContainer?.swiper.activeIndex == this.images.length-2) {
        this.clickbtn = false
      }
      this.currentIndex = swiperContainer?.swiper.activeIndex
    }
  }
  // goto ligin page
  async goToLogin() {
    await this.appDataService.set('startup', false)
    this.router.navigate(['/login-page'], { replaceUrl: true });
  }

}
