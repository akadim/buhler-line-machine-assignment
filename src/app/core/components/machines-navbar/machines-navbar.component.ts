import { Component, OnInit } from '@angular/core';
import { Machine } from '@buhler/model/line-machine/machine';
import { LineMachineService } from '@buhler/apis/line-machine.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-machines-navbar',
  templateUrl: './machines-navbar.component.html',
  styleUrls: ['./machines-navbar.component.scss'],
})
export class MachinesNavbarComponent implements OnInit {
  machines$!: Observable<Machine[]>;

  constructor(private lineMachineService: LineMachineService) {}

  ngOnInit() {
    this.machines$ = this.lineMachineService.getAllMachines();
  }
}
