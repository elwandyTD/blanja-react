import { getColorsString, getBrandsString, getCategoriesString, pending, rejected, fulfilled } from '../actionString'

const initialState = {
	colors: {},
	brands: {},
	categories: {},
	isPending: false,
	isFulfilled: false,
	isRejected: false,
	err: {}
}

const AttributeReducer = (prevState = initialState, action) => {
	switch (action.type) {
		case getColorsString + pending:
			return {
				...prevState,
				isPending: true,
				isRejected: false,
				isFulfilled: false,
			}
		case getColorsString + rejected:
			return {
				...prevState,
				isPending: true,
				isRejected: false,
			}
		case getColorsString + fulfilled:
			return {
				...prevState,
				isPending: true,
				isFulfilled: false,
				colors: action.payload.data
			}
		case getBrandsString + pending:
			return {
				...prevState,
				isPending: true,
				isRejected: false,
				isFulfilled: false,
			}
		case getBrandsString + rejected:
			return {
				...prevState,
				isPending: true,
				isRejected: false,
			}
		case getBrandsString + fulfilled:
			return {
				...prevState,
				isPending: true,
				isFulfilled: false,
				brands: action.payload.data
			}
		case getCategoriesString + pending:
			return {
				...prevState,
				isPending: true,
				isRejected: false,
				isFulfilled: false,
			}
		case getCategoriesString + rejected:
			return {
				...prevState,
				isPending: true,
				isRejected: false,
			}
		case getCategoriesString + fulfilled:
			return {
				...prevState,
				isPending: true,
				isFulfilled: false,
				categories: action.payload.data
			}
			
		default:
			return {
				...prevState,
			}
	}
}

export default AttributeReducer