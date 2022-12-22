import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { expense } from 'src/expense';
import { user } from 'src/user';
import { ProjserviceService } from '../projservice.service';

@Component({
  selector: 'app-enterexpenses',
  templateUrl: './enterexpenses.component.html',
  styleUrls: ['./enterexpenses.component.css']
})
export class EnterexpensesComponent implements OnInit {
  enterexpenseform: FormGroup;
  enteruserform: FormGroup;
  msg:boolean=false;
 

  constructor(private service:ProjserviceService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.enterexpenseform=this.fb.group({
      expenseType: [(''),Validators.required],
      amount: [(''),Validators.required]
    });
    this.enteruserform=this.fb.group({
      name1: [(''),Validators.required],
    });

  }

  onSubmit(){
  //  console.log(this.reactiveform.value)
  //   .subscribe(
  //   data=>{
  //     console.log(data)
  //   }
  //  )

  this.service.postexpenses(this.enterexpenseform.value).subscribe(
    result=>{
      console.log(result)
      console.log(this.enterexpenseform.value)
      this.msg=true;
      this.enterexpenseform.reset( {} );
    }
  );
   }

   removeMessage(){
    this.msg=false;
  }

}
