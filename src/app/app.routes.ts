import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'start-page1',
    pathMatch: 'full',
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
    path: 'registration-page-2',
    loadComponent: () => import('./registration-otp/registration-otp.page').then( m => m.RegistrationPage2Page)
  },

];
