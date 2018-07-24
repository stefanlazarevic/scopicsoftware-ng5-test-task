import { TestBed, inject } from '@angular/core/testing';

import { InvoiceService } from './invoice.service';

describe('InvoiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvoiceService]
    });
  });

  it('should be created', inject([InvoiceService], (service: InvoiceService) => {
    expect(service).toBeTruthy();
  }));

  it('should add invoice', inject([InvoiceService], (service: InvoiceService) => {
    const invoice = { name: 'Stefan Lazarevic' };

    service.addInvoice(invoice);
    expect(service.invoices.length).toBe(1);
  }));

  it('should remove invoice', inject([InvoiceService], (service: InvoiceService) => {
    const invoice = { name: 'Stefan Lazarevic' };

    service.addInvoice(invoice);
    service.addInvoice(invoice);
    service.addInvoice(invoice);

    service.removeInvoice();

    expect(service.invoices.length).toBe(2);

    service.removeInvoice(0);

    expect(service.invoices.length).toBe(1);
  }));
});
