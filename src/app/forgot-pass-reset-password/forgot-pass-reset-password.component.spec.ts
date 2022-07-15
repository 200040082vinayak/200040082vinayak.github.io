import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPassResetPasswordComponent } from './forgot-pass-reset-password.component';

describe('ForgotPassResetPasswordComponent', () => {
  let component: ForgotPassResetPasswordComponent;
  let fixture: ComponentFixture<ForgotPassResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPassResetPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPassResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
