import { Component, Input } from '@angular/core';
import { Machine } from '@buhler/model/line-machine/machine';
import { LineMachineEnums } from '@buhler/model/line-machine/line-machine-enums';

@Component({
  selector: 'app-machines-navbar-item',
  templateUrl: './machines-navbar-item.component.html',
  styleUrls: ['./machines-navbar-item.component.scss'],
})
export class MachinesNavbarItemComponent {
  @Input() machine!: Machine;
  protected readonly LineMachineEnums = LineMachineEnums;
}
