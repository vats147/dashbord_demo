import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { NgIf } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Dashbord1Component } from './dashbord1/dashbord1.component';
import { AllAPIChartService } from './service/all-apichart.service';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlidebarComponent,
    Dashbord1Component,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatMenuModule,
    MatSidenavModule,
    HttpClientModule,
    NgScrollbarModule
  ],
  providers: [AllAPIChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
