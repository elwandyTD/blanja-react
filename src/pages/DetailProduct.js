import React, { Component } from 'react'
import Navbar from '../components/navbar/navbar'
import axios from 'axios'
import { Container } from 'react-bootstrap'

export default class DetailProduct extends Component {
	state = {
		detailProduct: []
	}

	getProductById = () => {
		const id = this.props.match.params.id
		const url = 'http://localhost:8000/product/' + id
	
		axios
		.get(url)
		.then((data) => {
			this.setState({
				detailProduct: data.data
			})
		})
		.catch((e) => {
			console.log(e)
		})
	}

	componentDidMount = () => {
		this.getProductById()
	}

	render() {
		return (
			<>
				<Navbar />
				<Container>
					
				</Container>
			</>
		)
	}
}
