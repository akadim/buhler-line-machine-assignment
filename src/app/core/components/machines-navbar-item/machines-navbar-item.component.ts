import { Component, Input } from '@angular/core';
import { LineMachine } from '@buhler/model/line-machine/line-machine';
import { LineMachineEnums } from '@buhler/model/line-machine/line-machine-enums';
import { NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-machines-navbar-item',
  standalone: true,
  imports: [NgClass, MatIconModule],
  templateUrl: './machines-navbar-item.component.html',
  styleUrls: ['./machines-navbar-item.component.scss'],
})
export class MachinesNavbarItemComponent {
  @Input() machine!: LineMachine;
  protected readonly LineMachineEnums = LineMachineEnums;
}
