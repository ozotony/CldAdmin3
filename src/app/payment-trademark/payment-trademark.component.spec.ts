import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTrademarkComponent } from './payment-trademark.component';

describe('PaymentTrademarkComponent', () => {
  let component: PaymentTrademarkComponent;
  let fixture: ComponentFixture<PaymentTrademarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentTrademarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTrademarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
