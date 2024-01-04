import { Component, Input, OnInit } from '@angular/core';
import { Machine } from '../../machine';
import { LineMachineEnums } from '../../line-machine-enums';
import { LineMachineService } from '../../services/line-machine.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-machines-navbar',
  templateUrl: './machines-navbar.component.html',
  styleUrls: ['./machines-navbar.component.scss'],
})
export class MachinesNavbarComponent implements OnInit {
  machines$!: Observable<Machine[]>;
  protected readonly LineMachineEnums = LineMachineEnums;

  constructor(private lineMachineService: LineMachineService) {}

  ngOnInit() {
    this.machines$ = this.lineMachineService.getAllMachines();
  }
}
