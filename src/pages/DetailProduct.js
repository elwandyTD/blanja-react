import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Container } from 'react-bootstrap'
import Detail from '../components/detail/detail'
import axios from 'axios'

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
				detailProduct: data.data.data[0]
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
				<Container className="mt-5">
					<Detail product={this.state.detailProduct} />
				</Container>
			</>
		)
	}
}
