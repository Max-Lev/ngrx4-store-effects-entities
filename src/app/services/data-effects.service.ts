import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import 'rxjs/add/observable/of';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
@Injectable()
export class DataEffectsService {

  constructor(private http: HttpClient) { };

  getData(): Observable<any> {
    return this.http.get('http://localhost:4200/assets/data.json');
  };

}
