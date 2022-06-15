import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcPageComponent } from './vc-page.component';

describe('VcPageComponent', () => {
  let component: VcPageComponent;
  let fixture: ComponentFixture<VcPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
