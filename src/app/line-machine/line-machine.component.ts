import { Component, Input } from '@angular/core';
import { ProductionMachine } from '../production-machine';

@Component({
  selector: 'app-line-machine',
  templateUrl: './line-machine.component.html',
  styleUrls: ['./line-machine.component.scss'],
})
export class LineMachineComponent {
  @Input() machines?: ProductionMachine[];
}
