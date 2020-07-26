import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { ShowTaskComponent } from './show-task/show-task.component';
import { TimerComponent } from './timer/timer.component';
import { AddTaskComponent } from './add-task/add-task.component';


@NgModule({
  declarations: [ShowTaskComponent, TimerComponent, AddTaskComponent],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule
  ],
  exports:[
    ShowTaskComponent, TimerComponent, AddTaskComponent ]
})
export class DashboardModule { }
