import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Container } from 'react-bootstrap'
import Bag from '../components/bag/bag'


export default class MyBag extends Component {
	render() {
		return (
			<>
				<Navbar />
				<Container>
					<h1 className="font-weight-bold mt-4 mb-4">My bag</h1>
					<Bag />
				</Container>
			</>
		)
	}
}
