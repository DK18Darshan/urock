import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import getProduct from './reducers/Productreducer'




const rootReducer = combineReducers({
    GetProduct:getProduct,
})
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store;