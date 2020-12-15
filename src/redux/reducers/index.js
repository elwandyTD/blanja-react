import { combineReducers } from 'redux'

import ProductReducer from './Product'
import AttributeReducer from './Attribute'

const reducers = combineReducers({
	product: ProductReducer,
	attribute: AttributeReducer,
})

export default reducers