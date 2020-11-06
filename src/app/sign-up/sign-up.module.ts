import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [SignUpFormComponent, SignUpComponent],
  imports: [
    CommonModule,
    SharedModule,
    SignUpRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SignUpModule { }
