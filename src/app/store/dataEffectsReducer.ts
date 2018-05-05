

export const GET_DATA_INITIAL: string = 'GET_DATA_INITIAL';
export const GET_DATA: string = 'GET_DATA';
export const GET_DATA_SUCCESS: string = 'GET_DATA_SUCCESS';
export const GET_DATA_FAIL: string = 'GET_DATA_FAIL';

export interface IAppDataEffectAction {
    type: string;
    loading: boolean;
    loaded: boolean;
    payload?: any;

};
export class EffectDataStateInitial implements IAppDataEffectAction {
    type: string;
    loading: boolean;
    loaded: boolean;
    payload?: any;
    constructor() {
        this.type = GET_DATA;
        this.payload = {};
    }
};
export class EffectDataState implements IAppDataEffectAction {
    type: string;
    loading: boolean;
    loaded: boolean;
    payload: any;
    constructor(type: string, payload: any) {
        this.type = type;
        this.payload = payload;
    }
};

export function DataEffectsReducer(state = new EffectDataStateInitial(), action: IAppDataEffectAction) {
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return {
                ...state,
                ...action,
                type: action.type,
                loading: false,
                loaded: true,
                payload: action.payload
            };
        case GET_DATA_FAIL:
            return {
                ...state,
                ...action,
                type: action.type,
                loading: false,
                loaded: false,
                payload: action.payload
            };
        default:
            return {
                ...state,
                ...action,
                type: state.type,
                loading: true,
                loaded: false,
                payload: state.payload
            };
    }
}
