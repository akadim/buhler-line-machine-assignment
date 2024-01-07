import { Component, Input } from '@angular/core';
import { LineMachine } from '@buhler/model/line-machine/line-machine';
import { LineMachineEnums } from '@buhler/model/line-machine/line-machine-enums';
import { NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-line-machine-item',
  standalone: true,
  imports: [NgClass, MatIconModule],
  templateUrl: './line-machine-item.component.html',
  styleUrls: ['./line-machine-item.component.scss'],
})
export class LineMachineItemComponent {
  @Input() machine!: LineMachine;
  protected readonly LineMachineEnums = LineMachineEnums;
  constructor() {}
}
