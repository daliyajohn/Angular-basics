import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Section1Component } from './section1/section1.component';

const appRoutes: Routes = [
  {
    path: 'section',
    component: AppComponent,
  },
  {
    path: '',
    component: Section1Component,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
