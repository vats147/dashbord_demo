import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CalenderComponent } from './calender/calender.component';
import { Dashbord1Component } from './dashbord1/dashbord1.component';

const routes: Routes = [

  { path: '', component: Dashbord1Component },
  { path: 'calender', component: CalenderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
