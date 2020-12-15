import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'

import { getNewProducts, getPopularProducts } from '../redux/actionCreators/Product'
import Navbar from '../components/navbar/navbar'
import Banner from '../components/banner/banner'
import Category from '../components/category/category'
import Products from '../components/products/products'

class Home extends Component {
	getNewProductsDispatch = () => {
		this.props.dispatch(getNewProducts())
	}

	getPopularProductsDispatch = () => {
		this.props.dispatch(getPopularProducts())
	}

	componentDidMount = () => {
		this.getNewProductsDispatch()
		this.getPopularProductsDispatch()
	}

	render() {
		const { product } = this.props

		return (
			<>
				<Navbar history={this.props.history} />
				<Container className="mt-5">
					<Banner />
					<Category />
					<Products title="New" subtitle="You've never seen it before!" products={product.newProducts.data && product.newProducts.data.products} />
					<Products title="Popular" subtitle="Find clothes that are trending recently" products={product.popularProducts.data && product.popularProducts.data.products} />
				</Container>
			</>
		)
	}
}

const mapsStateToProps = ({ product }) => {
	return {
		product,
	}
}

export default connect(mapsStateToProps)(Home)