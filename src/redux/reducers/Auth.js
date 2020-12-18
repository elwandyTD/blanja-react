import { loginUserString, registerUserString, logoutUserString, pending, rejected, fulfilled } from '../actionString'

const initialPage = {
	data: {},
	logout: {},
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
				data: action.payload.data,
				logout: {},
			}

		case registerUserString + pending:
			return {
				...prevState,
				isPending: true,
				isRejected: false,
				isFulfilled: false,
			}
		case registerUserString + rejected:
			return {
				...prevState,
				isPending: false,
				isRejected: true,
				err: action.payload.data
			}
		case registerUserString + fulfilled:
			return {
				...prevState,
				isPending: false,
				isFulfilled: true,
				data: action.payload.data,
			}

		case logoutUserString + pending:
			return {
				...prevState,
				isPending: true,
				isRejected: false,
				isFulfilled: false,
			}
		case logoutUserString + rejected:
			return {
				...prevState,
				isPending: false,
				isRejected: true,
				err: action.payload.data
			}
		case logoutUserString + fulfilled:
			return {
				...prevState,
				isPending: false,
				isFulfilled: true,
				data: {},
				logout: action.payload.data
			}
	
		default:
			return {
				...prevState
			}
	}
}

export default AuthReducer