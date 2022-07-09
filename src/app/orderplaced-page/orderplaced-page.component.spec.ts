import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderplacedPageComponent } from './orderplaced-page.component';

describe('OrderplacedPageComponent', () => {
  let component: OrderplacedPageComponent;
  let fixture: ComponentFixture<OrderplacedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderplacedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderplacedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
