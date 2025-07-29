import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedElement } from './computed-element';

describe('ComputedElement', () => {
  let component: ComputedElement;
  let fixture: ComponentFixture<ComputedElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedElement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputedElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
