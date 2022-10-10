import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ViewexpensesComponent } from './viewexpenses/viewexpenses.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'viewexpense',
    component:ViewexpensesComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
