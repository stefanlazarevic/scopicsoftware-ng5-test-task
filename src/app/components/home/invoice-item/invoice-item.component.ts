import { Component, Input } from '@angular/core';
import { Invoice } from '../../../interfaces/invoice';
import { InvoiceService } from '../../../services/invoice/invoice.service';

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.sass'],
})
export class InvoiceItemComponent {

    @Input()
    public invoice : Invoice;

    constructor(private _invoiceService : InvoiceService) { }

    handleItemDeletion = (event : Event, id : number) : void => {
      this._invoiceService.removeInvoice(id);
    }

    handleItemDuplication = (event : Event, id : number) : void => {
      this._invoiceService.addInvoice(this.invoice);
    }

}
