import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { MainSplashComponent } from './main-splash/main-splash.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ChartOneComponent } from './chart-one/chart-one.component';
import { ChartTwoComponent } from './chart-two/chart-two.component';
import { ChartThreeComponent } from './chart-three/chart-three.component';


@NgModule({
  declarations: [
    AppComponent,
    MainSplashComponent,
    DataTableComponent,
    ChartOneComponent,
    ChartTwoComponent,
    ChartThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
