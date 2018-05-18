import { Paging } from './../../../store/filter-store/actions';
import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource, MatPaginator, PageEvent } from '@angular/material';
import { Store, select, compose } from '@ngrx/store';
import { FilterAppState, SelectedFilter, PageAppState } from '../../../store/filter-store/actions';
import { Subject } from 'rxjs/Subject';

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const CATEGORY_DATA: Element[] = [
  { position: 1, name: 'Category', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Category', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Category', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Category', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Category', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Category', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Category', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Category', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Category', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Category', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Category', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Category', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Category', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Category', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Category', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Category', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Category', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Category', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Category', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Category', weight: 40.078, symbol: 'Ca' },
];
const DEPARTMENT_DATA: Element[] = [
  { position: 1, name: 'Department', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Department', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Department', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Department', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Department', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Department', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Department', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Department', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Department', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Department', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Department', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Department', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Department', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Department', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Department', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Department', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Department', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Department', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Department', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Department', weight: 40.078, symbol: 'Ca' },
];
const BRANDS_DATA: Element[] = [
  { position: 1, name: 'Brands', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Brands', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Brands', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Brands', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Brands', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Brands', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Brands', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Brands', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Brands', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Brands', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Brands', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Brands', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Brands', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Brands', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Brands', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Brands', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Brands', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Brands', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Brands', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Brands', weight: 40.078, symbol: 'Ca' },
];

@Component({
  selector: 'app-data-container',
  templateUrl: './data-container.component.html',
  styleUrls: ['./data-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataContainerComponent implements OnInit, AfterViewInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(CATEGORY_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  FILTER_STATE: FilterAppState;
  PAGING_STATE: PageAppState;
  FILTER_ACTIVE_STATE: any;
  constructor(private filterStore: Store<FilterAppState>,
    private ref: ChangeDetectorRef, private pagingStore: Store<PageAppState>) { };

  ngOnInit() { };

  ngAfterViewInit() {
    this.filterStore.pipe(select('FilterReducer')).subscribe((state: FilterAppState) => {
      this.FILTER_STATE = state;
      this.FILTER_ACTIVE_STATE = this.FILTER_STATE.paginationList.find(item => item.type === this.FILTER_STATE.type);
      this.setDataSource(this.FILTER_ACTIVE_STATE.type, this.setActiveState_DataSource);
      this.ref.detectChanges();
      return state;
    });
  };

  setDataSource(name: string, dataSourceConverter: (data: any) => {}) {
    this.dataSource = new MatTableDataSource<Element>(<Element[]>dataSourceConverter(name));
    this.paginator.pageIndex = this.FILTER_ACTIVE_STATE['pageNum'];
    this.paginator.pageSize = this.FILTER_ACTIVE_STATE['pageSize'];
    this.dataSource.paginator = this.paginator;
  };

  setActiveState_DataSource(name: string): Element[] {
    switch (name) {
      case 'Category':
        return CATEGORY_DATA;
      case 'Department':
        return DEPARTMENT_DATA;
      default:
        return BRANDS_DATA;
    }
  };

  pageEvent(pageEvent: PageEvent) {
    const selectedFilterName = this.FILTER_STATE.type;
    this.filterStore.dispatch(new SelectedFilter(selectedFilterName, {
      pagination: { pageNum: pageEvent.pageIndex, pageSize: pageEvent.pageSize }
    }));
    this.ref.detectChanges();
  };

}


