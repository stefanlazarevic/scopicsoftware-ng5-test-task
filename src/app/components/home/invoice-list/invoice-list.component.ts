import { Component, OnInit, Input } from '@angular/core';
import { InvoiceService } from '../../../services/invoice/invoice.service';
import { Invoice } from '../../../interfaces/invoice';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.sass'],
})
export class InvoiceListComponent implements OnInit {

    public invoices : Invoice[];
    private searchTerm = '';

    constructor(private _invoiceService : InvoiceService) { }

    ngOnInit() : void {
        this._invoiceService.getInvoices().subscribe((invoiceList : Invoice[]) : void => {
            if (this.searchTerm === '') {
                this.invoices = invoiceList;
            } else {
                const regexp = new RegExp(`^${this.searchTerm}`, 'i');
                this.invoices = invoiceList.filter((invoice : Invoice) => {
                    return regexp.test(invoice.title);
                });
            }
        });
    }

    setSearchTerm = (searchTerm : string) : void => {
        this.searchTerm = searchTerm;
        this._invoiceService.refreshInvoices();
    }

}
