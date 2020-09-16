import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:Observable<firebase.User>
  constructor(private afauth:AngularFireAuth) { 
    this.user=this.afauth.user
  }

  signup(email,password){
    return this.afauth.auth.createUserWithEmailAndPassword(email,password)

  }
  signin(email,password){
    return this.afauth.auth.signInWithEmailAndPassword(email,password)

  }
  logout(){
   return this.afauth.auth.signOut()
  }
  
  AuthLogin(provider) {
    return this.afauth.auth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!')
    }).catch((error) => {
        console.log(error)
    })
  }
  google(){
    return this.AuthLogin(new auth.GoogleAuthProvider)
  }
  facebook(){
    return this.AuthLogin(new auth.FacebookAuthProvider)
  }

}
