import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { expense } from 'src/expense';
import { user } from 'src/user';
import { ProjserviceService } from '../projservice.service';

@Component({
  selector: 'app-expensedetails',
  templateUrl: './expensedetails.component.html',
  styleUrls: ['./expensedetails.component.css']
})
export class ExpensedetailsComponent implements OnInit {
  id?:number;
  exp1:expense;

  constructor(private activatedRoute:ActivatedRoute,private http:HttpClient,public ser:ProjserviceService) { }

  ngOnInit(): void {
    let idparam=this.activatedRoute.snapshot.paramMap.get('id');
    this.id=idparam?+idparam:0;
    this.ser.getExpenseDetails(this.id).subscribe(
      data=>{
        this.exp1=data;
      }
    );
  }

}
