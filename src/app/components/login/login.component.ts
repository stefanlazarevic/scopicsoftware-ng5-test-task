import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  username : string = '';
  password : string = '';
  error : string = '';

  constructor(
    private _authService : AuthService,
    private _router : Router
  ) { }

  ngOnInit() {
    if (this._authService.isAuthorized()) {
      this._router.navigate(['/invoices']);
    }
  }

  login = (event : Event) : void => {
    event.preventDefault();

    this._authService.login({ username: this.username, password: this.password})
      .then((redirectUrl : string) : void => {
        this._router.navigate([redirectUrl]);
      })
      .catch((errMessage : string) : void => {
        this.error = errMessage;
      });
  }

}
