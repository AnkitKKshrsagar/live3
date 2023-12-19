import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'signup', component:SignupComponent
  },

  {
    path:'list', component:ListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
