import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/user';

@Injectable()
export class AuthService {

  private _loginDataUrl = '/assets/db/db.sample.json';
  private _authSessionKey = 'ng5-invoice-auth';

  constructor(private _http: HttpClient) { }

  public isAuthorized = () : boolean => JSON.parse(sessionStorage.getItem(this._authSessionKey));

  public login = (userData : User) : Promise<string> => {
    return new Promise((resolve, reject) => {
      const username = userData.username;
      const password = userData.password;
      this._http.get(this._loginDataUrl).subscribe((users : Array<User>) => {
        users.forEach((user : User) => {
          if (user.username === username && user.password === password) {
            sessionStorage.setItem(this._authSessionKey, "true");
            resolve('/invoices');
          } else {
            reject('User with provided credentials has not been found.');
          }
        })
      });
    });
  }

  public logout = () : Promise<string> => {
    return new Promise((resolve, reject) => {
      try {
        sessionStorage.removeItem(this._authSessionKey);
        resolve('/login');
      } catch (err) {
        reject('Something went wrong.');
      }
    });
  }

}
