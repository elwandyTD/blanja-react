import axios from 'axios'

const url = 'http://localhost:8000'

export const getProducts = (queryParams = '') => {
	return {
		type: 'GET_PRODUCTS',
		payload: axios.get(url + '/product' + queryParams)
	}
}