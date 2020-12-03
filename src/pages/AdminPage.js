import React, { Component } from 'react'
import Navbar from '../components/navbar/navbar'
import { Container, Form, Col, Button } from 'react-bootstrap'
import axios from 'axios'

export default class AdminPage extends Component {
	state = {
		colors: [],
		categories: [],
		conditions: [],
		brands: [],
		name: '',
		category: 0,
		brand: 0,
		condition: 0,
		price: 0,
		qty: 0,
		description: '',
	}

	getCategories = () => {
		const url = 'http://localhost:8000/category'

		axios
		.get(url)
		.then(({ data }) => {
			this.setState({
				categories: data.data
			})
		})
		.catch((e) => {
			console.log(e)
		})


	}

	getBrands = () => {
		const url = 'http://localhost:8000/attribute/brands'

		axios
		.get(url)
		.then(({ data }) => {
			this.setState({
				brands: data.data
			})
		})
		.catch((e) => {
			console.log(e)
		})
	}

	// onChangeUpdate = (e) => {
	// 	console.log(e.target.value)
	// }

	getConditions = () => {
		const url = 'http://localhost:8000/attribute/condition'

		axios
		.get(url)
		.then(({ data }) => {
			this.setState({
				conditions: data.data
			})
		})
		.catch((e) => {
			console.log(e)
		})
	}

	insertProduct = (e) => {
		e.preventDefault()

		console.log(e)
	}

	componentDidMount = () => {
		this.getCategories()
		this.getBrands()
		this.getConditions()
	}

	render() {
		return (
			<>
				<Navbar />
				<Container className="mt-4 mb-5">
					<Col xl={6} lg={6} md={6} sm={12} xs={12} >
						<Form onSubmit={() => this.insertProduct()}>
							<Form.Group controlId="product-title">
								<Form.Label>Product name</Form.Label>
								<Form.Control type="text" placeholder="Product name..." />
							</Form.Group>
							<Form.Group controlId="brands">
								<Form.Label>Brands</Form.Label>
								<Form.Control as="select">
									<option disabled>Select brand</option>
									{this.state.brands && this.state.brands.map((brand, index) => {
										return <option value={brand.brand_id} key={index}>{brand.brand_name}</option>
									})}
								</Form.Control>
							</Form.Group>
							<Form.Group controlId="categories">
								<Form.Label>Categories</Form.Label>
								<Form.Control as="select">
									<option disabled>Select category</option>
									{this.state.categories && this.state.categories.map((category, index) => {
										return <option value={category.category_id} key={index}>{category.category_name}</option>
									})}
								</Form.Control>
							</Form.Group>
							<Form.Group controlId="conditions">
								<Form.Label>Conditions</Form.Label>
								<Form.Control as="select">
									<option disabled>Select condition</option>
									{this.state.conditions && this.state.conditions.map((condition, index) => {
										return <option value={condition.condition_id} key={index}>{condition.condition_name}</option>
									})}
								</Form.Control>
							</Form.Group>
							<Form.Group controlId="product-price">
								<Form.Label>Price</Form.Label>
								<Form.Control type="text" placeholder="Product price..." />
							</Form.Group>
							<Form.Group controlId="product-qty">
								<Form.Label>Quantity</Form.Label>
								<Form.Control type="number" placeholder="Product quantity..." />
							</Form.Group>
							<Form.Group controlId="description">
								<Form.Label>Description</Form.Label>
								<Form.Control as="textarea" rows={4} />
							</Form.Group>

							<Button className="float-right" variant="primary" type="submit">Add Products</Button>
						</Form>
					</Col>
				</Container>
			</>
		)
	}
}
