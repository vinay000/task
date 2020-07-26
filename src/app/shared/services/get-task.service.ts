import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable} from 'rxjs'


interface Itask{
      title:string,
      description: string,
      to: string,
      from: string
}

@Injectable({
  providedIn: 'root'
})
export class GetTaskService {

private getURL = ""
  constructor(private http:HttpClient) { }

  getTask(){
      return this.http.post(this.getURL,{})
  }
}

