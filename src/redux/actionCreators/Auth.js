import axios from 'axios'

import { loginUserString } from '../actionString'

const url = process.env.REACT_APP_API_URL

export const loginUser = (data, type) => {
	return {
		type: loginUserString,
		payload: axios.post(url + '/auth/login/' + type, data )
	}
}