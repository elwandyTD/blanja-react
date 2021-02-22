// import { combineReducers } from 'redux'
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


import ProductReducer from './Product'
import AttributeReducer from './Attribute'
import AuthReducer from './Auth'

const persistConfig = {
	key: 'root',
	storage,
}

const reducers = persistCombineReducers(persistConfig, {
	product: ProductReducer,
	attribute: AttributeReducer,
	auth: AuthReducer
})

export default reducers