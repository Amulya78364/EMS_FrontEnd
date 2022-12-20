import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminviewexpensesComponent } from './adminviewexpenses/adminviewexpenses.component';
import { LoginComponent } from './login/login.component';
import { EnterexpensesComponent } from './viewexpenses/enterexpenses.component';
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
    path:'enterexpense',
    component:EnterexpensesComponent
  },
  {
    path:'expensedetails/:id',
    component: ExpensedetailsComponent
  },
  {
    path:'adminviewexpense',
    component: AdminviewexpensesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
