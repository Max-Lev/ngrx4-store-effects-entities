import { DataEffectsService } from './../services/data-effects.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import 'rxjs/add/observable/of';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAIL, EffectDataState } from './dataEffectsReducer';
@Injectable()
export class DataEffects {

    constructor(private actions$: Actions, private http: HttpClient, private getDataService: DataEffectsService) { };

    @Effect()
    getData$: Observable<Action> = this.actions$.pipe(
        ofType(GET_DATA),
        mergeMap(action => this.getDataService.getData().pipe(
            // If successful, dispatch success action with result
            map((data) => {
                return new EffectDataState(GET_DATA_SUCCESS, data);
            }),
            // If request fails, dispatch failed action
            catchError(() => of(new EffectDataState(GET_DATA_FAIL, {})))
        ))
    );

}
