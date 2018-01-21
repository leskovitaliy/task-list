import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Task} from '../models/task';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class TasksService {
  private _getUrl = '/api/tasks';
  private _postUrl = '/api/task';
  private _putUrl = '/api/video';

  constructor(private _http: HttpClient) {
  }

  getTasks(): Observable<any> {
    return this._http.get(this._getUrl)
      .map(data => data);
  }

  addTask(task: Task) {
    const newTask = {
      header: task,
      description: '',
      date: new Date(),
      isDone: false
    };

     return this._http.post(this._postUrl, newTask)
       .map(res => res);
  }
}
