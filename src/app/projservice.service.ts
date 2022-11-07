import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjserviceService {

  constructor(public http:HttpClient) { }

conn():Observable<any>{
  return this.http.get<any>("http://localhost:8080/ems");
}
getexpenses(){
  return this.http.get<any>("http://localhost:8080/ems/getExpenses");
}

getExpenseDetails(expenseId:Number){
  return this.http.get<any>(`http://localhost:8080/expensedetails/${expenseId}`)
}

}