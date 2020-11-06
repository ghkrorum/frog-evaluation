import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { SignUpComponent } from './components/sign-up/sign-up.component';
//import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component'

const routes: Routes = [
  {
    path: '',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class SignUpRoutingModule {}
