import { Component, OnInit } from '@angular/core';
import {GetTaskService} from '../../shared/services/get-task.service';



@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.scss']
})
export class ShowTaskComponent implements OnInit {

  public taskdata;
  constructor() { }
  public get_service:GetTaskService
  ngOnInit(): void {
    this.get_service.getTask().subscribe(data => this.taskdata = data)
  }

}
