import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Rater from 'react-rater'
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
		console.log(this)
		return (
			<>
				<Navbar history={this.props.history} />
				<Container className="mt-3">

					<ProductsComp title="Products" subtitle={this.props.history.location.search !== "" ? "Search and filter result" : "All products we have here !"} products={product.products.data && product.products.data.products} />

					{/* <section>
						<span className="cs-title">Products</span>
						<p className="cs-subtitle">All product we have here!</p>
						<div className="card-products">
							
							{products.data && products.data.map((product, index) => {
								return (
									<Link to={{ pathname: '/product/' + product.product_id, state: this.state }}  key={index}>
										<div className="cs-card" >
											<img src="https://s3-alpha-sig.figma.com/img/464a/22c1/4934cf1d9102bfc8ca226895c16fe510?Expires=1607904000&Signature=hjxmkm5vdwrgv5LxRv2gFpN9qIoHk61bYPLf9nQEXcm8h6e~fdOfrjjc28fC70qOLSGe~6JhOElVJpPSqWffK5cyAKRn6wnYiz7zvwp0jVYLB6tkV28TFnQ5m02uSHl85JfEU~PN0QZYkKDujdWDqHJiat9LHlzjAcxwJ2K1-cK9lZBQkjxLUdwWvQqlok~t-QSOjbAtDoQBG53IVZvJtyB4DgWdejLj~jF97RE5iuOVUl0Q5sXADMOAUF-Y-yRPXSNZGVB4yNasQWrnFC5~WWyHLW4WvvKuf7X4GyyqCT3nhKuzPyc386tjBJNc6RHGxIL95onI2Tww5IGFbxNCrQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="cs-head-card" />
											<div className="cs-card-body">
											<p className="cs-card-title">{product.product_title}</p>
											<p className="cs-price">$ {product.product_price}</p>
												<p className="cs-brand">{product.brand_name}</p>
												<span>
													<Rater total={5} rating={2} interactive={false} />
													<span className="cs-star-review ml-1">(10)</span>
												</span>
											</div>
										</div>
									</Link>
								)
							})}

						</div>
					</section> */}
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