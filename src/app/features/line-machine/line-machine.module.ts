import { NgModule } from '@angular/core';
import {LineMachineComponent} from "./components/line-machine/line-machine.component";
import {LineMachineItemComponent} from "./components/line-machine-item/line-machine-item.component";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    LineMachineComponent,
    LineMachineItemComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    LineMachineComponent
  ]
})
export class LineMachineModule { }
