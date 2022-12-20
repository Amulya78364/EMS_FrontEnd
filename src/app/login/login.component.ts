import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjserviceService } from '../projservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,public service:ProjserviceService,private fb: FormBuilder) { }
  loginform: FormGroup;
  msg:boolean=false;

  ngOnInit(): void {
    this.loginform=this.fb.group({
      userName: ['',Validators.required],
      designation:['',Validators.required]
    });
  }

  onSubmit(){
    this.service.postuser(this.loginform.value).subscribe(
      result=>{
      console.log(result)
      this.msg=true;
      this.loginform.reset( {} );
    });
  }

  removeMessage(){
    this.msg=false;
  }

}
