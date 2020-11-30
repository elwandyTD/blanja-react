import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Navbar from '../components/navbar/navbar'
import Banner from '../components/banner/banner'
import Category from '../components/category/category'

export default class Home extends Component {
	render() {
		return (
			<>
				<Navbar />
				<Container className="mt-5">
					<Banner />
					<Category />
				</Container>
			</>
		)
	}
}
