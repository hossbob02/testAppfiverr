import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { auth } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:Observable<firebase.User>
  userId:string=''
  constructor(private afauth:AngularFireAuth) { 
    this.user=this.afauth.user

  }

  signup(email,password){
    return this.afauth.createUserWithEmailAndPassword(email,password)

  }
  signin(email,password){
    return this.afauth.signInWithEmailAndPassword(email,password)
  }
  logout(){
    return this.afauth.signOut()
  }
  
  AuthLogin(provider) {
    return this.afauth.signInWithPopup(provider)
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
