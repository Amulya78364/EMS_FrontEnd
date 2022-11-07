import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ExpensedetailsComponent } from './viewexpenses/expensedetails.component';
import { ViewexpensesComponent } from './viewexpenses/viewexpenses.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'viewexpense',
    component:ViewexpensesComponent
  },
  {
    path:'expensedetails/:id',
    component: ExpensedetailsComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
