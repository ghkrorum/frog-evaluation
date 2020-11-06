import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMasonryModule } from 'ngx-masonry';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { MaterialModule } from './../material/material.module';
import { CrystalLightboxModule } from '@crystalui/angular-lightbox';

import { DiscoverRoutingModule } from './discover-routing.module';
import { DiscoverComponent } from './components/discover/discover.component';

@NgModule({
  declarations: [
    DiscoverComponent
  ],
  imports: [
    CommonModule,
    DiscoverRoutingModule,
    NgxMasonryModule,
    MatCarouselModule.forRoot(),
    MaterialModule,
    CrystalLightboxModule
  ]
})
export class DiscoverModule { }
