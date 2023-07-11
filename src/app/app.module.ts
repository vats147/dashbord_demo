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

import { AppRoutingModule } from './app-routing.module';
import { CalenderComponent } from './calender/calender.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from './service/auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environment/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlidebarComponent,
    Dashbord1Component,
    CalenderComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireAuthModule,
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
    MatRadioModule,
    MatSlideToggleModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule

  ],
  providers: [AllAPIChartService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
