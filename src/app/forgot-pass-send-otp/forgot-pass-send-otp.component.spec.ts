import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPassSendOtpComponent } from './forgot-pass-send-otp.component';

describe('ForgotPassSendOtpComponent', () => {
  let component: ForgotPassSendOtpComponent;
  let fixture: ComponentFixture<ForgotPassSendOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPassSendOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPassSendOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
