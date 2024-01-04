import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LineMachineComponent } from './components/line-machine/line-machine.component';
import { MatIconModule } from '@angular/material/icon';
import { MachinesNavbarComponent } from './components/machines-navbar/machines-navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { DatePipe } from '@angular/common';
import { LineMachineItemComponent } from './components/line-machine-item/line-machine-item.component';
import { MachinesNavbarItemComponent } from './components/machines-navbar-item/machines-navbar-item.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment.development';

@NgModule({
  declarations: [
    AppComponent,
    LineMachineComponent,
    MachinesNavbarComponent,
    HeaderComponent,
    LineMachineItemComponent,
    MachinesNavbarItemComponent,
  ],
  imports: [BrowserModule, MatIconModule, HttpClientModule],
  providers: [
    DatePipe,
    {
      provide: 'BASE_API_URL',
      useValue: environment.apiUrl,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
