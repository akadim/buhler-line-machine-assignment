import { Component } from '@angular/core';
import { LineMachineEnums } from './line-machine-enums';
import { Machine } from './machine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  lineMachine!: Machine[];
  constructor() {
    this.lineMachine = [
      {
        title: 'Scale',
        icon: 'system_update_alt',
        state: LineMachineEnums.RUNNING,
      },
      {
        title: 'Attacher',
        icon: 'list_alt',
        state: LineMachineEnums.ALARM,
      },
      {
        title: 'Packer',
        icon: 'call_to_action_outlined',
        state: LineMachineEnums.RUNNING,
      },
      {
        title: 'Closer',
        icon: 'grid_on',
        state: LineMachineEnums.WARNING,
      },
    ];
  }
}
