import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-invoice-item-settings',
  templateUrl: './invoice-item-settings.component.html',
  styleUrls: ['./invoice-item-settings.component.sass']
})
export class InvoiceItemSettingsComponent implements OnInit {

    public isExpanded : boolean;

    constructor() { }

    ngOnInit() : void {
      this.isExpanded = false;
    }

    setExpanded = (expandedStatus : boolean) : void => {
      this.isExpanded = expandedStatus;
    }

    @Output()
    onDelete : EventEmitter<any> = new EventEmitter();

    @Output()
    onDuplicate : EventEmitter<any> = new EventEmitter();

    delete = (event : Event) : void => this.onDelete.emit(event);

    duplicate = (event : Event) : void => this.onDuplicate.emit(event);

}
