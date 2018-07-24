import { Component } from '@angular/core';
import { InvoiceService } from '../../../services/invoice/invoice.service';
import { Invoice } from '../../../interfaces/invoice';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.sass'],
})
export class InvoiceFormComponent {

    public title : string;

    constructor(private _invoiceService : InvoiceService) {
        this.title = '';
    }

    reset = () : void => {
        this.title = '';
    }

    onSubmit = (event : Event) => {
        event.preventDefault();

        if (this.title !== '') {
            const invoice : Invoice = {
                title: this.title,
            };

            this._invoiceService.addInvoice(invoice);

            this.reset();
        }
    }
}
