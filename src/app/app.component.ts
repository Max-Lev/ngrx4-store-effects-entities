import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { FilterAppState, SelectedFilter, BRAND, Paging, PageAppState } from './store/filter-store/actions';
import { DataEffectsService } from './services/data-effects.service';
import { IAppDataEffectAction, GET_DATA_INITIAL, EffectDataState, GET_DATA } from './store/dataEffectsReducer';
import { DataEffects } from './store/dataEffects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ]
})
export class AppComponent implements OnInit, AfterViewInit {

  FILTERSTATE: FilterAppState;

  constructor(private http: HttpClient, private store: Store<FilterAppState>,
    private effectsStore: Store<IAppDataEffectAction>, private dataEffects: DataEffects, private pagingStore: Store<PageAppState>) {

    // this.store.pipe(select('FilterReducer')).subscribe((state: FilterAppState) => {
    //   this.FILTERSTATE = state;
    // });
    // this.effectsStore.pipe(select('DataEffectsReducer')).subscribe((effectsData: IAppDataEffectAction) => {
    //   console.log('DataEffectsReducer data: ', effectsData);
    //   return effectsData;
    // });

  }

  ngOnInit(): void { };

  ngAfterViewInit(): void { };

  // getData() {
  //   this.effectsStore.dispatch(new EffectDataState(GET_DATA, {}));
  // };

  // filter(name: string) {
  //   const active = this.FILTERSTATE.paginationList.find(item => item.type === name);
  //   this.store.dispatch(new SelectedFilter(name, {
  //     pagination: {
  //       pageNum: (active === undefined) ? 0 : active.pageNum,
  //       pageSize: (active === undefined) ? 3 : active.pageSize,
  //     }
  //   }));
  // };

}
