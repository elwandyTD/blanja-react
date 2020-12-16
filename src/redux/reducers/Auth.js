import { loginUserString, pending, rejected, fulfilled } from '../actionString'

const initialPage = {
	data: {},
	isPending: false,
	isFulfilled: false,
	isRejected: false,
	err: {}
}

const AuthReducer = (prevState = initialPage, action) => {
	switch (action.type) {
		case loginUserString + pending:
			return {
				...prevState,
				isPending: true,
				isRejected: false,
				isFulfilled: false,
			}
		case loginUserString + rejected:
			return {
				...prevState,
				isPending: false,
				isRejected: true,
				err: action.payload.data
			}
		case loginUserString + fulfilled:
			return {
				...prevState,
				isPending: false,
				isFulfilled: true,
				data: action.payload.data
			}
	
		default:
			return {
				...prevState
			}
	}
}

export default AuthReducer