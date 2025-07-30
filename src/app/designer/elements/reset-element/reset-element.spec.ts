import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetElement } from './reset-element';

describe('ResetElement', () => {
  let component: ResetElement;
  let fixture: ComponentFixture<ResetElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetElement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
