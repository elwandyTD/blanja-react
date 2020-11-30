import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import Navbar from '../components/navbar/navbar'
import Banner from '../components/banner/banner'
import Category from '../components/category/category'
import Products from '../components/products/products'

export default class Home extends Component {
	state = {
		productNew: []
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

	componentDidMount = () => {
		this.getNewProducts()
	}

	render() {
		return (
			<>
				<Navbar />
				<Container className="mt-5">
					<Banner />
					<Category />
					<Products title="New" subtitle="You've never seen it before!" products={this.state.productNew} />
					<Products title="Popular" subtitle="Find clothes that are trending recently" products={this.state.productNew} />
				</Container>
			</>
		)
	}
}
