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
  return this.http.get<any>("http://34.217.127.59:8080/ems");
}

// postuser(user:user){
//   //  console.log(data);
//    return this.http.post("http://localhost:8080/webapi/ems/postUser",user);
// }

postuser(){
  //  console.log(data);
   return this.http.get("http://34.217.127.59:8080/webapi/ems/postUser");
}

postusername(emailId:string){
  console.log(emailId);
  return this.http.post("http://34.217.127.59:8080/webapi/ems/postUsername",emailId);
}

getusername(){
  return this.http.get("http://34.217.127.59:8080/webapi/ems/getUserName")
}

postexpenses(expense:expense){
 return this.http.post("http://34.217.127.59:8080/webapi/ems/postExpenses",expense);
//  console.log(data);
}

postadminexpenses(expense:expense){
  return this.http.post("http://34.217.127.59:8080/webapi/ems/postAdminExpenses",expense);
}

getexpenses(){
  return this.http.get<any>("http://34.217.127.59:8080/webapi/ems/getExpenses");
}

getallexpenses(){
  return this.http.get<any>("http://34.217.127.59:8080/webapi/ems/getAllExpenses");
}

getExpenseDetails(expenseId:Number){
  return this.http.get<any>(`http://34.217.127.59:8080/webapi/expensedetails/${expenseId}`);
}

test(){
  return this.http.get<any>("http://34.217.127.59:8080/test/1");
}
}