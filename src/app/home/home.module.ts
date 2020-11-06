import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from './../material/material.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';


@NgModule({
  declarations: [HomeComponent, BannerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
