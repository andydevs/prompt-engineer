import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormattedElement } from './formatted-element';

describe('FormattedContainer', () => {
  let component: FormattedElement;
  let fixture: ComponentFixture<FormattedElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormattedElement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormattedElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
