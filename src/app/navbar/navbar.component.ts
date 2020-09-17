import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isUser:boolean
  constructor(private as:AuthService,private route:Router) { }

  ngOnInit(): void {
    this.as.user.subscribe(user=>{
      if(user){this.isUser=true
      this.as.userId=user.uid
      }
      else {this.isUser=false
      this.as.userId=''
      }
    })
  }
logout(){
  this.as.logout().then(()=>{
    this.route.navigate(['/signin'])
  })
}
}
