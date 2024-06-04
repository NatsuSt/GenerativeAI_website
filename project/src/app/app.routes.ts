import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";

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

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // Прокрутка к началу страницы
  anchorScrolling: 'enabled' // Прокрутка к якорям (если есть)
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
