import { combineReducers } from 'redux'

import ProductReducer from './Product'

const reducers = combineReducers({
	product: ProductReducer,
})

export default reducers