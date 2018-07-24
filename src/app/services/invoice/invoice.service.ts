import { Injectable } from '@angular/core';
import { Invoice } from '../../interfaces/invoice';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class InvoiceService {

    private _nextId : number;
    private _storageKey : string = 'ng5-invoices';

    private invoicesSubject: BehaviorSubject<Invoice[]>;
    private invoices$ : Observable<Invoice[]>;

    constructor() {
        const invoices = this.fetchInvoices();

        this.invoicesSubject = new BehaviorSubject<Invoice[]>(invoices);
        this.invoices$ = this.invoicesSubject.asObservable();

        // First item in list is most recent one so we get it's id.
        this._nextId = invoices.length ? invoices[0].id + 1 : 1;
    }

    public getInvoices = () : Observable<Invoice[]> => this.invoices$;

    public addInvoice = (invoice : Invoice) : void => {
        // Create new object copy to prevent original object edit.
        const _invoice = Object.assign({}, invoice);
        // Apply auto-generated id instead of manualy set id in Invoice object.
        _invoice.id = this._nextId;

        const invoices = [
            _invoice,
            ...this.invoicesSubject.getValue(),
        ];

        this.setLocalStorageInvoices(invoices);
        this._nextId++;

        this.invoicesSubject.next(invoices);
    }

    public removeInvoice = (id : number) : void => {
        const invoices = this.invoicesSubject.getValue().filter(
            (invoice : Invoice) : boolean => invoice.id !== id
        );

        this.setLocalStorageInvoices(invoices);
        this.invoicesSubject.next(invoices);
    }

    public refreshInvoices = () : void => {
        this.invoicesSubject.next(this.invoicesSubject.getValue());
    }

    private fetchInvoices = () : Array<Invoice> => {
        return JSON.parse(localStorage.getItem(this._storageKey)) || [];
    }

    private setLocalStorageInvoices = (invoices : Invoice[]) : void => {
        localStorage.setItem(this._storageKey, JSON.stringify(invoices));
    }
}
