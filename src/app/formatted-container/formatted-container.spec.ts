import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormattedContainer } from './formatted-container';

describe('FormattedContainer', () => {
  let component: FormattedContainer;
  let fixture: ComponentFixture<FormattedContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormattedContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormattedContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
