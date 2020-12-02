import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import Navbar from '../components/navbar/navbar'
import Banner from '../components/banner/banner'
import Category from '../components/category/category'
import Products from '../components/products/products'

export default class Home extends Component {
	state = {
		products: [],
		productNew: [],
		allCategory: [],
		allColor: [],
		allBrand: [],
		queryFilter: '',
	}

	getNewProducts = () => {
		const url = "http://localhost:8000/products?order=newest&sort=asc"
		axios
		.get(url)
		.then(({ data }) => {
			this.setState({
				productNew: data,
			})
		})
		.catch((e) => {
			console.log(e)
		})
	}

	getAllCategory = () => {
		const url = "http://localhost:8000/category"

		axios
		.get(url)
		.then(({ data }) => {
			this.setState({
				allCategory: data
			})
		})
		.catch((e) => {
			console.log(e)
		})
	}

	getQuery = (params) => {
		const url = 'http://localhost:8000/products?' + params

		axios
		.get(url)
		.then(({ data }) => {
			const { history } = this.props
			
			this.setState({
				products: data
			})
			history.push({
				pathname: '/products',
				state: this.state
			})
		})
		.catch((e) => {
			console.log(e)
		})
	}

	componentDidMount = () => {
		this.getAllCategory()
		this.getNewProducts()
	}

	render() {
		
		return (
			<>
				<Navbar getQuery={this.getQuery} />
				<Container className="mt-5">
					<Banner />
					<Category categories={this.state.allCategory} />
					<Products title="New" subtitle="You've never seen it before!" products={this.state.productNew.data} />
					<Products title="Popular" subtitle="Find clothes that are trending recently" products={this.state.productNew.data} />
				</Container>
			</>
		)
	}
}
