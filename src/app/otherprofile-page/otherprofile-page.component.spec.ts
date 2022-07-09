import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherprofilePageComponent } from './otherprofile-page.component';

describe('OtherprofilePageComponent', () => {
  let component: OtherprofilePageComponent;
  let fixture: ComponentFixture<OtherprofilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherprofilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherprofilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
