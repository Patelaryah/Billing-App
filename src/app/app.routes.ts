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
    path: 'otp-page',
    loadComponent: () => import('./login-pages/otp-page/otp-page.page').then( m => m.RegistrationPage2Page)
  },
  {
    path: 'home-page',
    loadComponent: () => import('./Home-Pages/home-page/home-page.page').then( m => m.HomePagePage)
  },

];
