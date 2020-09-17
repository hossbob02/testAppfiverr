import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private as:AuthService,private router:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>
  {
    return new Promise(resolve=>{
      this.as.user.subscribe(user=>{
        if(user) resolve(true)
        else{
          this.router.navigate(['/'])
          resolve(false)
        }
      })
    })
  }
}

