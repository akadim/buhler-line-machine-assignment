import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesNavbarItemComponent } from './machines-navbar-item.component';

describe('MachinesNavbarItemComponent', () => {
  let component: MachinesNavbarItemComponent;
  let fixture: ComponentFixture<MachinesNavbarItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachinesNavbarItemComponent]
    });
    fixture = TestBed.createComponent(MachinesNavbarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
