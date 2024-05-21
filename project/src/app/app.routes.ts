import { Routes } from '@angular/router';

/**
 * Настроил роуты, по дефолту будут перехлдить на home
 */
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',   //по дефолту во всех случаях если нету такого роута на который хочешь перейти
    pathMatch: 'full'
  },
  {
    path: 'home',
    pathMatch: 'prefix',
    loadChildren: () => import('./pages/home/home.routes').then(r => r.HOME_ROUTES)
  },
  {
    path: 'about',
    pathMatch: 'prefix',
    loadChildren: () => import('./pages/about-page/about-page.routes').then(r => r.ABOUT_PAGE_ROUTES)
  }


];
