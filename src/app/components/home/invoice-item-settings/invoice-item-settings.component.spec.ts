import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceItemSettingsComponent } from './invoice-item-settings.component';

describe('InvoiceItemSettingsComponent', () => {
  let component: InvoiceItemSettingsComponent;
  let fixture: ComponentFixture<InvoiceItemSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceItemSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceItemSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
