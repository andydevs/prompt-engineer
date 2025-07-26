import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementTree } from './element-tree';

describe('ElementTree', () => {
  let component: ElementTree;
  let fixture: ComponentFixture<ElementTree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementTree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementTree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
