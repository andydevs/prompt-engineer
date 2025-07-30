import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatElement } from './format-element';

describe('FormatElement', () => {
  let component: FormatElement;
  let fixture: ComponentFixture<FormatElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormatElement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
