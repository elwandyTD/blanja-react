import { combineReducers } from 'redux'

import ProductReducer from './Product'
import AttributeReducer from './Attribute'
import AuthReducer from './Auth'

const reducers = combineReducers({
	product: ProductReducer,
	attribute: AttributeReducer,
	auth: AuthReducer
})

export default reducers