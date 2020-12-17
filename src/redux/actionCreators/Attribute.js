import axios from 'axios'

import { getColorsString, getBrandsString, getCategoriesString, getSizesString } from '../actionString'

const url = process.env.REACT_APP_API_URL

export const getColors = () => {
	return {
		type: getColorsString,
		payload: axios.get(url + '/attribute/colors')
	}
}

export const getBrands = () => {
	return {
		type: getBrandsString,
		payload: axios.get(url + '/attribute/brands')
	}
}

export const getCategories = () => {
	return {
		type: getCategoriesString,
		payload: axios.get(url + '/category')
	}
}

export const getSizes = () => {
	return {
		type: getSizesString,
		payload: axios.get(url + '/attribute/sizes')
	}
}