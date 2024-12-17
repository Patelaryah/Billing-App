import { Routes } from '@angular/router';
import { HomePagePage } from './Home-Pages/home-page/home-page.page';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login-page',
    pathMatch: 'full',
  },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
  {
    path: 'home',
    component: HomePagePage,
    children: [
      {
        path: 'invoice',
        loadComponent: () => import('./Home-Pages/_Invoice/invoice/invoice.page').then( m => m.InvoicePage)
      },
      {
        path: 'parties',
        loadComponent: () => import('./Home-Pages/_Parties/parties/parties.page').then( m => m.PartiesPage)
      },
      {
        path: 'profile',
        loadComponent: () => import('./Home-Pages/_Profile/profile/profile.page').then( m => m.ProfilePage)
      },
      {
        path: '',
        redirectTo: 'invoice',
        pathMatch: 'full',
      },
    ],
    
  },
  {
    path: 'start-page1',
    loadComponent: () => import('./startpages/start-page1/start-page1.page').then( m => m.StartPage1Page)
  },
  {
    path: 'login-page',
    loadComponent: () => import('./login-pages/login-page/login-page.page').then( m => m.LoginPagePage)
  },
  {
    path: 'registration-page',
    loadComponent: () => import('./login-pages/registration-page/registration-page.page').then( m => m.RegistrationPagePage)
  },
  {
    path: 'forgot-password-page',
    loadComponent: () => import('./login-pages/forgot-password-page/forgot-password-page.page').then( m => m.ForgotPasswordPagePage)
  },
  {
    path: 'otp-page',
    loadComponent: () => import('./login-pages/otp-page/otp-page.page').then( m => m.RegistrationPage2Page)
  },
  {
    path: 'home',
    loadComponent: () => import('./Home-Pages/home-page/home-page.page').then( m => m.HomePagePage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./Home-Pages/_Profile/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'invoice',
    loadComponent: () => import('./Home-Pages/_Invoice/invoice/invoice.page').then( m => m.InvoicePage)
  },
  {
    path: 'parties',
    loadComponent: () => import('./Home-Pages/_Parties/parties/parties.page').then( m => m.PartiesPage)
  },  {
    path: 'invoice-preview',
    loadComponent: () => import('./Home-Pages/_Invoice/invoice-preview/invoice-preview.page').then( m => m.InvoicePreviewPage)
  },
  {
    path: 'notification',
    loadComponent: () => import('./Home-Pages/notification/notification.page').then( m => m.NotificationPage)
  },

 

];
