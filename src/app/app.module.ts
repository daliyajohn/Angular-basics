import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { Section1Component } from './section1/section1.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author/author.service';


@NgModule({
  declarations: [
    AppComponent,
    Section1Component,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
