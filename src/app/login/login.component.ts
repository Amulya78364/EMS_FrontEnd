import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjserviceService } from '../projservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
x:any;
  constructor(private router:Router,public ser:ProjserviceService) { }

  ngOnInit(): void {

  }

  call(){
    return this.ser.conn().subscribe(
data=>{
  this.x=data;
}
    );
  }

}
