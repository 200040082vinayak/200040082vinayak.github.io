import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPassVerifyOtpComponent } from './forgot-pass-verify-otp.component';

describe('ForgotPassVerifyOtpComponent', () => {
  let component: ForgotPassVerifyOtpComponent;
  let fixture: ComponentFixture<ForgotPassVerifyOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPassVerifyOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPassVerifyOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
