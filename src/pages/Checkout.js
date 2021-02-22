import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Container } from 'react-bootstrap'
import MyCheckout from '../components/checkout/checkout'

export default class Checkout extends Component {
	render() {
		return (
			<>
				<Navbar />
				<Container>
					<h1 className="font-weight-bold mt-4 mb-4">Checkout</h1>
					<MyCheckout />
				</Container>
			</>
		)
	}
}
