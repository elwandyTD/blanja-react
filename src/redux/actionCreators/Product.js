import axios from 'axios'
import { postProductString } from '../actionString'

const url = process.env.REACT_APP_API_URL

export const getProducts = (queryParams = '') => {
	return {
		type: 'GET_PRODUCTS',
		payload: axios.get(url + '/product' + queryParams)
	}
}

export const getNewProducts = () => {
	return {
		type: 'GET_NEW_PRODUCTS',
		payload: axios.get(url + '/product?order=newest&sort=desc')
	}
}

export const getPopularProducts = () => {
	return {
		type: 'GET_POPULAR_PRODUCTS',
		payload: axios.get(url + '/product?order=popular&sort=desc')
	}
}

export const postProduct = (formData, token) => {
	return {
		type: postProductString,
		payload: axios.post(url + '/product', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
				'x-access-token': 'Bearer ' + token
			}
		})
	}
}