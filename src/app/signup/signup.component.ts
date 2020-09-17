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
  errMessage=''
  constructor(private as:AuthService,private route:Router) { }

  ngOnInit(): void {
  }
  signup(f){
   let data=f.value
    this.as.signup(data.email,data.password).then(()=>{
      this.route.navigate(['/articles'])
      this.message='success signup'
    }).catch(()=>{
      this.errMessage='failed signUp'
    })
      
  }
}
