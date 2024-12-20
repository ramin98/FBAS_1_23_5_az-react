import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './reducers/reducerState/reducerProducts'
// import {reducerBag} from './reducers/reducerState/reducerBag'
// import {reducerAdmin} from './reducers/reducerState/reducerAdmin'
// import {reducerEditAdmin} from './reducers/reducerState/reducerAdminEdit'


export const store = configureStore({
    reducer: {
        products: productsSlice
    }
})