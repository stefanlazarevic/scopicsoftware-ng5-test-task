import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-logout',
  template: '',
  styles: [],
})
export class LogoutComponent implements OnInit {

  constructor(
    private _router : Router,
    private _authService : AuthService
  ) { }

  ngOnInit() {
    if (this._authService.isAuthorized()) {
      this._authService.logout().then((redirectUrl : string) => {
        this._router.navigate([redirectUrl]);
      });
    }
  }

}
