import { Action } from '@ngrx/store';
import {
    FilterInitial, CATEGORY, DEPARTMENT, FilterAppState, BRAND, PageInitial,
    PageAppState, CATEGORY_PAGING, DEPARTMENT_PAGING, BRAND_PAGING
} from './actions';

export function FilterReducer(state = new FilterInitial(), action: FilterAppState) {

    switch (action.type) {
        case CATEGORY:
            const category = Object.assign({}, {
                ...state,
                ...action,
                type: action.type,
                payload: {
                    pagination: { ...action.payload.pagination },
                },
                paginationList: paginationState(state, action)
            });
            return category;

        case DEPARTMENT:
            const department = Object.assign({}, {
                ...state,
                ...action,
                type: action.type,
                payload: {
                    pagination: { ...action.payload.pagination },
                },
                paginationList: paginationState(state, action)
            });
            console.log('department: ', department);
            return department;

        case BRAND:
            const Brand = Object.assign({}, {
                ...state,
                ...action,
                type: action.type,
                payload: {
                    pagination: { ...action.payload.pagination },
                },
                paginationList: paginationState(state, action)
            });
            console.log('Brand: ', Brand);
            return Brand;

        default:
            const BrandInitial = Object.assign({}, {
                ...state,
                ...action,
                type: state.type,
                payload: {
                    pagination: {
                        pageNum: state.payload.pagination.pageNum,
                        pageSize: state.payload.pagination.pageSize
                    }
                },
                paginationList: paginationState(state, action)
            });
            console.log(action);
            console.log('BrandInitial: ', BrandInitial);
            return BrandInitial;
    };
};

function paginationState(state: FilterInitial, action: FilterAppState): any {
    if (state.paginationList.length === 0) {
        state.paginationList.push({
            type: state.type,
            pageNum: state.payload.pagination.pageNum,
            pageSize: state.payload.pagination.pageSize
        });
    } else {
        const isItem: boolean = state.paginationList.some(item => item.type === action.type);
        if (!isItem) {
            state.paginationList.push({ type: action.type, pageNum: 0, pageSize: 3 });
        } else {
            const page = state.paginationList.find((item => item.type === action.type));
            page.pageNum = action.payload.pagination.pageNum;
            page.pageSize = action.payload.pagination.pageSize;
        }
    }
    return state.paginationList.filter((item: FilterAppState) => {
        if (item.type === BRAND || item.type === CATEGORY || item.type === DEPARTMENT) {
            return item;
        };
    });
};

