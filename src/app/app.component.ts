import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '@buhler/core/components/header/header.component';
import { MachinesNavbarComponent } from '@buhler/core/components/machines-navbar/machines-navbar.component';
import { LineMachineComponent } from '@buhler/features/line-machine/components/line-machine/line-machine.component';
import { Store } from '@ngrx/store';
import { loadMachines } from '@buhler/store/machine/actions/line-machine.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MachinesNavbarComponent, LineMachineComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadMachines());
  }
}
