import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-invoice-search',
  templateUrl: './invoice-search.component.html',
  styleUrls: ['./invoice-search.component.sass']
})
export class InvoiceSearchComponent implements OnDestroy {

    private searchTerm : string = '';
    private delegate;

    constructor() { }

    @Output()
    onSearch : EventEmitter<any> = new EventEmitter();

    setSearchTerm = (event : Event) : void => {
      const input : HTMLInputElement = event.target as HTMLInputElement;
      this.searchTerm = input.value;

      if (this.delegate) {
        clearTimeout(this.delegate);
      }

      this.delegate = setTimeout(function() {
        this.onSearch.emit(this.searchTerm);
      }.bind(this), 350);
    }

    ngOnDestroy() {
      clearTimeout(this.delegate);
    }

}
