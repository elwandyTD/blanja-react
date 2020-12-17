import { getColorsString, getBrandsString, getCategoriesString, getSizesString, pending, rejected, fulfilled } from '../actionString'

const initialState = {
	colors: {},
	brands: {},
	categories: {},
	sizes: {},
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
				isPending: false,
				isRejected: true,
				err: action.payload.data,
			}
		case getColorsString + fulfilled:
			return {
				...prevState,
				isPending: false,
				isFulfilled: true,
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
				isPending: false,
				isRejected: true,
				err: action.payload.data,
			}
		case getBrandsString + fulfilled:
			return {
				...prevState,
				isPending: false,
				isFulfilled: true,
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
				isPending: false,
				isRejected: true,
				err: action.payload.data,
			}
		case getCategoriesString + fulfilled:
			return {
				...prevState,
				isPending: false,
				isFulfilled: true,
				categories: action.payload.data
			}
		case getSizesString + pending:
			return {
				...prevState,
				isPending: true,
				isRejected: false,
				isFulfilled: false,
			}
		case getSizesString + rejected:
			return {
				...prevState,
				isPending: false,
				isRejected: true,
				err: action.payload.data,
			}
		case getSizesString + fulfilled:
			return {
				...prevState,
				isPending: false,
				isFulfilled: true,
				sizes: action.payload.data
			}
			
		default:
			return {
				...prevState,
			}
	}
}

export default AttributeReducer