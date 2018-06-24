import {Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

import {ITask} from '../interfaces/task';
import {Observable} from 'rxjs/Observable';
import { pluckAndCatch } from '../../shared/utils/response-formater';


@Injectable()
export class TasksService {
  private host = 'http://localhost:3000';

  private _getUrl = this.host + '/api/tasks';
  private _postUrl = this.host + '/api/task';
  private _putUrl = this.host + '/api/task/';
  private _deleteUrl = this.host + '/api/task/';

  constructor(private _http: HttpClient) {}

  getTasks(): Observable<any> {
    const params = new HttpParams() // TODO fix query params for pagination
      .set('currentPage', '1')
      .set('limit', '5');
    return this._http.get(this._getUrl, {params});
  }

  addTask(name: string): Observable<ITask> {
    const newTask = {
      header: name,
      description: '',
      date: new Date(),
      isDone: false,
      status: 'active'
    };

     return this._http.post(this._postUrl, newTask)
       .pipe(pluckAndCatch);
  }

  deleteTask(id: number) {
    return this._http.delete(this._deleteUrl + id);
  }

  updateTask(id: number, status: string) {
    return this._http.put(this._putUrl + id, {status});
  }
}
