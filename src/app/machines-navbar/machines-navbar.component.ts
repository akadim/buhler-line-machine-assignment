import { Component, Input } from '@angular/core';
import { ProductionMachine } from '../production-machine';
import { LineMachineEnums } from '../line-machine-enums';

@Component({
  selector: 'app-machines-navbar',
  templateUrl: './machines-navbar.component.html',
  styleUrls: ['./machines-navbar.component.scss'],
})
export class MachinesNavbarComponent {
  @Input() machines?: ProductionMachine[];
  protected readonly LineMachineEnums = LineMachineEnums;
}
