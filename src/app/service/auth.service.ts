import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public fireAuth: AngularFireAuth) { }

  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  async AuthLogin(obj: any) {
    return this.fireAuth
      .signInWithPopup(obj)
      .then((result) => {
        console.log('You have been successfully logged in!');
        console.log(result)
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
