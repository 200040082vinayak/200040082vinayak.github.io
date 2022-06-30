import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GloginPageComponent } from './glogin-page.component';

describe('GloginPageComponent', () => {
  let component: GloginPageComponent;
  let fixture: ComponentFixture<GloginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GloginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GloginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
