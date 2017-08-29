import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouter } from './home.routes';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRouter
  ]
})
export class HomeModule { }
