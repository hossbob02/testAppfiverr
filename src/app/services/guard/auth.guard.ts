import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private as:AuthService,private router:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>
  {
    return new Promise(resolve=>{
      this.as.user.subscribe(user=>{
        if(user) resolve(true)
        else{
          this.router.navigate(['/signin'])
          resolve(false)
        }
      })
    })
  }
}
