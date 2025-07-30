import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ps1Display } from './ps1-display';

describe('Ps1Display', () => {
  let component: Ps1Display;
  let fixture: ComponentFixture<Ps1Display>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ps1Display]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ps1Display);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
