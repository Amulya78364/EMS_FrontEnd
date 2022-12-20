import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { expense } from 'src/expense';
import { user } from 'src/user';

@Injectable({
  providedIn: 'root'
})
export class ProjserviceService {

  constructor(private http:HttpClient) { }

conn():Observable<any>{
  return this.http.get<any>("http://35.163.152.113:8080/ems");
}

postuser(user:user){
  //  console.log(data);
   return this.http.post("http://35.163.152.113:8080/webapi/ems/postUser",user);
}

postusername(uname:string){
  console.log(uname);
  return this.http.post("http://35.163.152.113:8080/webapi/ems/postUsername",uname);
}

postexpenses(expense:expense){
 return this.http.post("http://35.163.152.113:8080/webapi/ems/postExpenses",expense);
//  console.log(data);
}

getexpenses(){
  return this.http.get<any>("http://35.163.152.113:8080/webapi/ems/getExpenses");
}

getallexpenses(){
  return this.http.get<any>("http://35.163.152.113:8080/webapi/ems/getAllExpenses");
}

getExpenseDetails(expenseId:Number){
  return this.http.get<any>(`http://35.163.152.113:8080/webapi/expensedetails/${expenseId}`);
}

test(){
  return this.http.get<any>("http://35.163.152.113:8080/test/1");
}
}