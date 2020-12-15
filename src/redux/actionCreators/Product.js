import axios from 'axios'

const url = 'http://localhost:8000'

export const getProducts = (queryParams = '') => {
	return {
		type: 'GET_PRODUCTS',
		payload: axios.get(url + '/product' + queryParams)
	}
}

export const getNewProducts = () => {
	return {
		type: 'GET_NEW_PRODUCTS',
		payload: axios.get(url + '/product?order=newest&sort=asc')
	}
}

export const getPopularProducts = () => {
	return {
		type: 'GET_POPULAR_PRODUCTS',
		payload: axios.get(url + '/product?order=popular&sort=desc')
	}
}