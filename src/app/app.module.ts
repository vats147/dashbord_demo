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
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import {Component, ViewChild} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatMenuTrigger} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { CalenderComponent } from './calender/calender.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlidebarComponent,
    Dashbord1Component,
    CalenderComponent,
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
    NgScrollbarModule,
    MatTableModule,
    MatGridListModule,
    MatProgressBarModule,
    CdkDropList,
    CdkDrag,
    MatCheckboxModule,
    MatTooltipModule,
    AppRoutingModule,
    

  ],
  providers: [AllAPIChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
