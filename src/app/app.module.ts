import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LineMachineComponent } from './line-machine/line-machine.component';
import { MatIconModule } from '@angular/material/icon';
import { MachinesNavbarComponent } from './machines-navbar/machines-navbar.component';
import { HeaderComponent } from './header/header.component';
import { DatePipe } from '@angular/common';
import { LineMachineItemComponent } from './line-machine-item/line-machine-item.component';
import { MachinesNavbarItemComponent } from './machines-navbar-item/machines-navbar-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LineMachineComponent,
    MachinesNavbarComponent,
    HeaderComponent,
    LineMachineItemComponent,
    MachinesNavbarItemComponent,
  ],
  imports: [BrowserModule, MatIconModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
