import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextElement } from './text-element';

describe('TextElement', () => {
  let component: TextElement;
  let fixture: ComponentFixture<TextElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextElement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
