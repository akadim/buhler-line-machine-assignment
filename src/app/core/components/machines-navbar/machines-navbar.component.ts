import { Component, OnInit } from '@angular/core';
import { LineMachine } from '@buhler/model/line-machine/line-machine';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectLineMachines } from '@buhler/store/machine/selectors/line-machine.selector';
import { MachinesNavbarItemComponent } from '@buhler/core/components/machines-navbar-item/machines-navbar-item.component';
import { AsyncPipe, NgClass, NgFor } from '@angular/common';
import { AppState } from '@buhler/store/app.state';

@Component({
  selector: 'app-machines-navbar',
  standalone: true,
  imports: [NgFor, NgClass, AsyncPipe, MachinesNavbarItemComponent],
  templateUrl: './machines-navbar.component.html',
  styleUrls: ['./machines-navbar.component.scss'],
})
export class MachinesNavbarComponent implements OnInit {
  machines$!: Observable<LineMachine[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.machines$ = this.store.pipe(select(selectLineMachines));
  }
}
