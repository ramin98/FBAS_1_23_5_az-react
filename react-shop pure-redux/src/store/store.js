import { createStore, applyMiddleware, combineReducers } from "redux";
import {reducerProducts} from './reducers/reducerState/reducerProducts'
import {reducerBag} from './reducers/reducerState/reducerBag'
import {reducerAdmin} from './reducers/reducerState/reducerAdmin'
import {reducerEditAdmin} from './reducers/reducerState/reducerAdminEdit'
import { thunk } from "redux-thunk";

let reducers = combineReducers({
    products: reducerProducts,
    bag: reducerBag,
    admin: reducerAdmin,
    adminEdit: reducerEditAdmin,
})

export const store = createStore(reducers, applyMiddleware(thunk))