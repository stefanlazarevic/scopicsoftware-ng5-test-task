import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice/invoice.service';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [InvoiceService]
})
export class HomeComponent implements OnInit{

    constructor(
      private _invoiceService: InvoiceService,
      private _authService : AuthService,
      private _router : Router
    ) { }

    ngOnInit() : void {
      if(!this._authService.isAuthorized()) {
        this._router.navigate(['/login']);
      }
    }
}
