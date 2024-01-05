import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {MachinesNavbarComponent} from "./components/machines-navbar/machines-navbar.component";
import {MachinesNavbarItemComponent} from "./components/machines-navbar-item/machines-navbar-item.component";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    HeaderComponent,
    MachinesNavbarComponent,
    MachinesNavbarItemComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    MachinesNavbarComponent
  ]
})
export class CoreModule { }
