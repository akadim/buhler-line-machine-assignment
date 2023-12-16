import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineMachineItemComponent } from './line-machine-item.component';

describe('LineMachineItemComponent', () => {
  let component: LineMachineItemComponent;
  let fixture: ComponentFixture<LineMachineItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineMachineItemComponent]
    });
    fixture = TestBed.createComponent(LineMachineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
