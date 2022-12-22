import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { expense } from 'src/expense';
import { ProjserviceService } from '../projservice.service';

@Component({
  selector: 'app-adminenterexpenses',
  templateUrl: './adminenterexpenses.component.html',
  styleUrls: ['./adminenterexpenses.component.css']
})
export class AdminenterexpensesComponent {
  enteradminexpenseform: FormGroup;
  enteradminuserform: FormGroup;
  listunames: any;
  msg:boolean=false;
  msg1:boolean=false;
  message:string;

  constructor(public service:ProjserviceService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.enteradminuserform=this.fb.group({
      emailId: [(''),Validators.required],
    });

    this.enteradminexpenseform=this.fb.group({
      expenseType: [(''),Validators.required],
      amount: [(''),Validators.required]
    });

    this.service.getusername().subscribe(
      data=>{
        this.listunames=data;
        if (this.listunames.length==0) {
          this.message="You are not an admin!";
          
        }
        else{
          this.message="";
          this.msg1=true;
        }
        console.log(this.listunames);
      }
    )
  }

  onUserSubmit(){
    console.log(this.enteradminuserform.value);
    this.service.postusername(this.enteradminuserform.value).subscribe(
      data=>{
        console.log(data);
      }
    )
  }
  onSubmit(){ 
    console.log(this.enteradminexpenseform.value);

        this.service.postadminexpenses(this.enteradminexpenseform.value).subscribe(
          data=>{
            console.log(data)
            this.msg=true; 
            this.enteradminexpenseform.reset( {} );
          }
        ) 
  }

  removeMessage(){
    this.msg=false;
  }

}
