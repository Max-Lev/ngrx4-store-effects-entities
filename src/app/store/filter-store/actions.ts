import { Action } from '@ngrx/store';
export const BRAND: string = 'Brand';
export const CATEGORY: string = 'Category';
export const DEPARTMENT: string = 'Department';
export const BRAND_PAGING: string = 'Brand_Paging';
export const CATEGORY_PAGING: string = 'Category_Paging';
export const DEPARTMENT_PAGING: string = 'Department_Paging';
export const INITIAL: string = 'Initial';


export interface FilterAppState extends Action {
    type: string;
    payload: any;
    paginationList: any[];
}

export class FilterInitial implements FilterAppState {
    paginationList: any[] = [];
    type: string = BRAND;
    payload: any;
    constructor() {
        this.type = BRAND;
        this.payload = { pagination: { pageNum: 0, pageSize: 3 } };
        this.paginationList = [];
    };
};

export class SelectedFilter implements FilterAppState {
    paginationList: any[] = [];
    type: string;
    payload: any;
    constructor(type: string, payload: any) {
        this.type = type;
        this.payload = { pagination: payload.pagination };
    }
}


export interface PageAppState extends Action {
    type: string;
    payloadPagination: any;
};

export class PageInitial implements PageAppState {
    type: string = BRAND;
    payloadPagination: any = {
        pageNum: 0,
        pageSize: 3
    };
};

export class Paging implements PageAppState {
    type: string;
    payloadPagination: any;
    constructor(type: string, payload: any) {
        this.type = type;
        this.payloadPagination = payload;
    }
};
