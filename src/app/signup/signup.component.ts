import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  message=''
  constructor(private as:AuthService,private routes:Router) { }

  ngOnInit(): void {
  }
  signup(f){
    let data=f.value
    this.as.signup(data.email,data.password).then(res=>{
      
        console.log(res)
        this.routes.navigate(['/articles'])
      }).catch(err=>{
        this.message="This email is exist in database"
      })
      
  }
}
