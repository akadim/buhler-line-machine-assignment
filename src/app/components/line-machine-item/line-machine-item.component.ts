import { Component, Input } from '@angular/core';
import { Machine } from '../../machine';
import { LineMachineEnums } from '../../line-machine-enums';

@Component({
  selector: 'app-line-machine-item',
  templateUrl: './line-machine-item.component.html',
  styleUrls: ['./line-machine-item.component.scss'],
})
export class LineMachineItemComponent {
  @Input() machine!: Machine;
  protected readonly LineMachineEnums = LineMachineEnums;
}
