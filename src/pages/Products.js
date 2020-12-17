import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'

import { getProducts } from '../redux/actionCreators/Product'
import Navbar from  '../components/navbar/navbar'
import ProductsComp from '../components/products/products'

class Products extends Component {

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

	getProductDispatch = () => {
		const { search } = this.props.history.location

		this.props.dispatch(getProducts(search))
	}

	nextLink = (pageInfo) => {
		if (pageInfo.nextPage !== null) {
			return <Link to={{ pathname: '/product', search: pageInfo.nextPage }}> Next </Link>
		}
	}

	prevLink = (pageInfo) => {
		if (pageInfo.prevPage !== null) {
			<Link to={{ pathname: '/product', search: pageInfo.prevPage }}> Prev </Link>
		}
	}

	myPagination = (pageInfo) => {

		if (pageInfo.prevPage !== null) {
			<Link to={{ pathname: pageInfo.prevPage }}> Prev </Link>
		}
		if (pageInfo.totalPage !== 1) {
			for(let i = 1; i <= pageInfo.totalPage; i++) {
				<Link to={{ pathname: '/product', search: pageInfo.prevPage }}> {i} </Link>
			}
		}
		if (pageInfo.nextPage !== null) {
			<Link to={{ pathname: pageInfo.nextPage }}> Next </Link>
		}
		console.log(pageInfo)
	}

	componentDidMount = () => {
		this.getProductDispatch()
	}

	componentDidUpdate = (prevState) => {
		if (prevState.location.key !== this.props.location.key) {
			this.getProductDispatch()
		}
	}
    
	render() {
		const { product } = this.props
		
		return (
			<>
				<Navbar history={this.props.history} />
				<Container className="mt-3">

					<ProductsComp title="Products" subtitle={this.props.history.location.search !== "" ? "Search and filter result" : "All products we have here !"} products={product.products.data && product.products.data.products} />
					
					{/* {(product.products.data && this.prevLink(product.products.data.pageInfo))} */}
					{/* {(product.products.data && this.myPagination(product.products.data.pageInfo))} */}
					{/* {(product.products.data && this.nextLink(product.products.data.pageInfo))} */}
				</Container>
			</>
		)
	}
}

const mapsStateToProps = ({ product }) => {
	return {
		product
	}
}

export default connect(mapsStateToProps)(Products)