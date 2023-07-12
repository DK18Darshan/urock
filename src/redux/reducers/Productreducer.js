import * as  actiontype from '../action/Actiontype';

const initState = {
    getProduct: [],
    loading: false,
    todayOrder: [],
    pendingOrder: [],
    completeOrder: [],
    allUser: [],
    error: ""
}

export const store = (state = initState, action) => {
    switch (action.type) {
        case actiontype.GET_PRODUCT_INIT:
            return {
                ...state,
                loading: true,
                error: "",
            }
        case actiontype.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                getProduct: action.payload,
                loading: false,
            }
        case actiontype.GET_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload,
               
            }
        case actiontype.GET_SINGEL_INIT:
            return {
                ...state,
                loading: true,
                error: "",
            }
        case actiontype.GET_SINGEL_SUCCESS:
            return {
                ...state,
                getSingle:action.payload,
                loading: false,
            }
        case actiontype.GET_SINGEL_FAIL:
            return {
                loading: false,
                error: action.payload,
                GetSingle: []
            }
        default:
            return state;
    }
}

export default store;