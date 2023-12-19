import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListComponent } from './list/list.component';
import { SignupComponent } from './signup/signup.component';
console.warn("Lazy Loading is running");

@NgModule({
  declarations: [
    ListComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
