import { Component, Input } from '@angular/core';
import { Machine } from '@buhler/model/line-machine/machine';
import { LineMachineEnums } from '@buhler/model/line-machine/line-machine-enums';

@Component({
  selector: 'app-line-machine-item',
  templateUrl: './line-machine-item.component.html',
  styleUrls: ['./line-machine-item.component.scss'],
})
export class LineMachineItemComponent {
  @Input() machine!: Machine;
  protected readonly LineMachineEnums = LineMachineEnums;
}
