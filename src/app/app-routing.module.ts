import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Section1Component } from './section1/section1.component';
import { AuthorComponent } from './author/author.component';
import { FormComponent } from './form/form.component';

const appRoutes: Routes = [
  {
    path: 'section',
    component: AppComponent
  },
  {
    path: 'author',
    component: AuthorComponent
  },
  {
    path: '',
    component: Section1Component
  },
  {
    path: 'form',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
