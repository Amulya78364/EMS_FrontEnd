import { Component, OnInit } from '@angular/core';
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
  constructor(public ser:ProjserviceService) { }

  ngOnInit(): void {
    this.u=new user();
  }
getexpenses():void{
  this.ser.getexpenses().subscribe(
    data=>{
this.exp=data;
    }
  )
}
}
