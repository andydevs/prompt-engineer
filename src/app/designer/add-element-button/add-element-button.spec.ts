import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddElementButton } from './add-element-button';

describe('AddElementButton', () => {
  let component: AddElementButton;
  let fixture: ComponentFixture<AddElementButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddElementButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddElementButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
