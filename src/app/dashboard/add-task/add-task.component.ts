import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostTaskService} from '../../shared/services/post-task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor() {}
public post_service: PostTaskService
  ngOnInit(): void {
  }
  
  
onSubmit(form:NgForm){
  this.post_service.postTask(form.value)
}



}
