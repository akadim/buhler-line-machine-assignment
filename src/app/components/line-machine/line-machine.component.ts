import { Component, OnInit } from '@angular/core';
import { Machine } from '../../machine';
import { Observable } from 'rxjs';
import { LineMachineService } from '../../services/line-machine.service';

@Component({
  selector: 'app-line-machine',
  templateUrl: './line-machine.component.html',
  styleUrls: ['./line-machine.component.scss'],
})
export class LineMachineComponent implements OnInit {
  machines$!: Observable<Machine[]>;

  constructor(private lineMachineService: LineMachineService) {}

  ngOnInit() {
    this.machines$ = this.lineMachineService.getAllMachines();
  }
}
