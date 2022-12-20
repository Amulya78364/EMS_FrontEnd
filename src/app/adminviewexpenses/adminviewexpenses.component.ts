import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { expense } from 'src/expense';
import { ProjserviceService } from '../projservice.service';

@Component({
  selector: 'app-adminviewexpenses',
  templateUrl: './adminviewexpenses.component.html',
  styleUrls: ['./adminviewexpenses.component.css']
})
export class AdminviewexpensesComponent {
  exp:expense[]=[];
  msg:string;
  message:boolean=false;

  constructor(public service:ProjserviceService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.onSubmit()
  }

  onSubmit(){
    this.service.getallexpenses().subscribe(
      data=>{
  this.exp=data;
  console.log(this.exp);
  if (this.exp.length==0) {
    this.msg="You are not an admin!";
    this.message=true;
  }
  else{
    this.msg="";
  }
      }
    )
  }


}
