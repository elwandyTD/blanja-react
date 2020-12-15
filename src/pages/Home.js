import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import Navbar from '../components/navbar/navbar'
import Banner from '../components/banner/banner'
import Category from '../components/category/category'
import Products from '../components/products/products'

export default class Home extends Component {
	state = {
		productsNew: [],
		productsPopular: [],
		allCategory: [],
	}

	getNewProducts = () => {
		const url = "http://localhost:8000/product?order=newest&sort=asc"
		axios
		.get(url)
		.then(({ data }) => {
			this.setState({
				productsNew: data.data,
			})
		})
		.catch((e) => {
			console.log(e)
		})
	}

	getPopularProducts = () => {
		const url = "http://localhost:8000/product?order=popular&sort=desc"
		axios
		.get(url)
		.then(({ data }) => {
			this.setState({
				productsPopular: data.data,
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
		this.getNewProducts()
		this.getPopularProducts()
		console.log(this.props)
		console.log(this.state)
	}

	render() {
		return (
			<>
				<Navbar props={this.props} />
				<Container className="mt-5">
					<Banner />
					<Category />
					<Products title="New" subtitle="You've never seen it before!" products={this.state.productsNew.products} />
					<Products title="Popular" subtitle="Find clothes that are trending recently" products={this.state.productsPopular.products} />
				</Container>
			</>
		)
	}
}
