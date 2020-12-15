const initialState = {
	products: {},
	isPending: false,
	isFulfilled: false,
	isRejected: false,
	err: {}
}

const ProductReducer = (prevState = initialState, action) => {
	switch (action.type) {
		case 'GET_PRODUCTS_PENDING':
			return {
				...prevState,
				isPending: true,
				isRejected: false,
				isFulfilled: false,
			}
		case 'GET_PRODUCTS_REJECTED':
			return {
				...prevState,
				isPending: false,
				isRejected: true,
				err: action.payload
			}
		case 'GET_PRODUCTS_FULFILLED':
			return {
				...prevState,
				isPending: false,
				isFulfilled: true,
				products: action.payload.data
			}
			
		default:
			return {
				...prevState,
			}
	}
}

export default ProductReducer