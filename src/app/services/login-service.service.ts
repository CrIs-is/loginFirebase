import { Injectable } from '@angular/core';
import { AngularFireAuth }from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators';
import { auth }from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(public authService: AngularFireAuth) { }

  logout(){
    return this.authService.auth.signOut();
  }

  //Registrar usuario con email y password
  register(email:string,password:string){

    return new Promise((resolve,reject)=>{
      this.authService.auth.createUserWithEmailAndPassword(email,password)
      .then( userData => resolve(userData),
      err => reject(err));
    })
  }

  //Loguear ususario pasandole el email y el password
  logIn(email:string,password:string){
    return new Promise((resolve,reject)=>{
      this.authService.auth.signInWithEmailAndPassword(email,password)
      .then( userData => resolve(userData),
      err => reject(err));
    })
  }

//Devolver datos de el usuario logueado
  currentUser(){
    return this.authService.authState.pipe(map(auth => auth));
  }

}
