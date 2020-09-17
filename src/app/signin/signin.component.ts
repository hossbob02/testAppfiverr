import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private as:AuthService,private routes:Router) { }

  ngOnInit(): void {
  }
  signin(f){
    let data=f.value
   this.as.signin(data.email,data.password).then(()=>{
     this.routes.navigate(['/'])
   })
  }
  
  google(){
    this.as.google().then(res=>{
      this.routes.navigate(['/articles'])
      console.log(res)
    })
  }
  facebook(){
    this.as.facebook().then(res=>{
      this.routes.navigate(['/articles'])
      console.log(res)
    })
  }
}
