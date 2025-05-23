import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CaptchaComponent} from './captcha/captcha.component';
import {ResultComponent} from './result/result.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"captcha", component: CaptchaComponent},
  {path:"result", component: ResultComponent},
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {}
