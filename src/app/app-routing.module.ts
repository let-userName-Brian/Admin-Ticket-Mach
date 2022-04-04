import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainSplashComponent } from './main-splash/main-splash.component';

const routes: Routes = [
  { path: '', component: MainSplashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
