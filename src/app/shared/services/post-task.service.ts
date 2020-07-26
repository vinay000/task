import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostTaskService {

  private postURL = "http://localhost:3001/create-task"
  constructor(private http:HttpClient) { }

  postTask(data){
    return this.http.post(this.postURL,"")
  }
}