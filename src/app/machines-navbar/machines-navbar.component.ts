import { Component, Input } from '@angular/core';
import { Machine } from '../machine';
import { LineMachineEnums } from '../line-machine-enums';

@Component({
  selector: 'app-machines-navbar',
  templateUrl: './machines-navbar.component.html',
  styleUrls: ['./machines-navbar.component.scss'],
})
export class MachinesNavbarComponent {
  @Input() machines!: Machine[];
  protected readonly LineMachineEnums = LineMachineEnums;
}
