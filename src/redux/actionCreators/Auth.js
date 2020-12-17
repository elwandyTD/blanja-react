import axios from 'axios'

import { loginUserString, logoutUserString } from '../actionString'

const url = process.env.REACT_APP_API_URL

export const loginUser = (data, type) => {
	return {
		type: loginUserString,
		payload: axios.post(url + '/auth/login/' + type, data )
	}
}

export const logoutUser = (token) => {
	return {
		type: logoutUserString,
		payload: axios.delete(url + '/auth/logout', {
			headers: {
				'x-access-token': token,
			}
		})
	}
}