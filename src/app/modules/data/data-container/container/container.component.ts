import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FilterAppState, PageAppState, SelectedFilter } from '../../../../store/filter-store/actions';
import { DataEffects } from '../../../../store/dataEffects';
import { IAppDataEffectAction, EffectDataState, GET_DATA } from '../../../../store/dataEffectsReducer';
import { select, Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  effectsData$: Observable<any>;

  FILTERSTATE: FilterAppState;

  constructor(private http: HttpClient, private store: Store<FilterAppState>,
    private ref: ChangeDetectorRef,
    private effectsStore: Store<IAppDataEffectAction>, private dataEffects: DataEffects, private pagingStore: Store<PageAppState>) {

    this.store.pipe(select('FilterReducer')).subscribe((state: FilterAppState) => {
      this.FILTERSTATE = state;
    });
    this.effectsStore.pipe(select('DataEffectsReducer')).subscribe((effectsData: IAppDataEffectAction) => {
      console.log('DataEffectsReducer data: ', effectsData);
      return effectsData;
    });

  }

  ngOnInit() { };

  getData() {
    this.effectsStore.dispatch(new EffectDataState(GET_DATA, {}));
  };

  filter(name: string) {
    const active = this.FILTERSTATE.paginationList.find(item => item.type === name);
    this.store.dispatch(new SelectedFilter(name, {
      pagination: {
        pageNum: (active === undefined) ? 0 : active.pageNum,
        pageSize: (active === undefined) ? 3 : active.pageSize,
      }
    }));
  };

}
