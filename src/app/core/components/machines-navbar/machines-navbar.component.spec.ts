import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesNavbarComponent } from './machines-navbar.component';

describe('MachinesNavbarComponent', () => {
  let component: MachinesNavbarComponent;
  let fixture: ComponentFixture<MachinesNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachinesNavbarComponent]
    });
    fixture = TestBed.createComponent(MachinesNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
