import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateElement } from './date-element';

describe('DateElement', () => {
  let component: DateElement;
  let fixture: ComponentFixture<DateElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateElement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
