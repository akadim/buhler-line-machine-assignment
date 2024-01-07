import { Component, OnInit } from '@angular/core';
import { LineMachine } from '@buhler/model/line-machine/line-machine';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectLineMachines } from '@buhler/store/machine/selectors/line-machine.selector';
import { LineMachineItemComponent } from '@buhler/features/line-machine/components/line-machine-item/line-machine-item.component';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-line-machine',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, LineMachineItemComponent],
  templateUrl: './line-machine.component.html',
  styleUrls: ['./line-machine.component.scss'],
})
export class LineMachineComponent implements OnInit {
  machines$!: Observable<LineMachine[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.machines$ = this.store.pipe(select(selectLineMachines));
  }
}
