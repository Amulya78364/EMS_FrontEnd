import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { expense } from 'src/expense';
import { user } from 'src/user';
import { ProjserviceService } from '../projservice.service';

@Component({
  selector: 'app-viewexpenses',
  templateUrl: './viewexpenses.component.html',
  styleUrls: ['./viewexpenses.component.css']
})
export class ViewexpensesComponent implements OnInit {
  exp:expense[]=[];
  u:user;
  enterusernameform: FormGroup;
  uname:string;
  msg:boolean=false;

constructor(public service:ProjserviceService,private fb: FormBuilder) { }


  ngOnInit(): void {
    this.enterusernameform=this.fb.group({
      userName: [(''),
        [Validators.required,
         Validators.pattern('[a-zA-Z]*')
        ]
    ]
    })
    this.u=new user();
    this.service.test().subscribe(data=>{
      console.log("message");
    })
  
    this.service.getexpenses().subscribe(
      data=>{
        this.exp=data;
        if(this.exp.length==0){
          this.msg=true;
        }
        else{
          this.msg=false;
        }
      }
    )
  }
  
getexpenses():void{
  this.service.test().subscribe(data=>{
    console.log("message");
  })
  

  this.service.getexpenses().subscribe(
    data=>{
      this.exp=data;
    }
  )
}
}
