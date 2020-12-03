import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './bag.css'

export default class MyBag extends Component {
	state = {
		myBag: [],
		totalPrice: 0
	}

	getProducts = () => {
		const products = localStorage.getItem('bag')
		if (products) {
			this.setState({
				myBag: JSON.parse(products)
			})
		} 
	}

	getTotalProduct = () => {
		const products = localStorage.getItem('bag')
		if (products) {
			const productsA = JSON.parse(products)

			const l = productsA.map((p) => {
				let h = 0
				h += (p.product_price * p.product_qty)
				return h
			})

			this.setState({
				totalPrice : l.reduce((a, b) => a + b, 0)
			})
		} 
	}

	componentDidMount = () => {
		this.getProducts()
		this.getTotalProduct()
	}

	render() {
		return (
			<Row>
				<Col xl={8} lg={8} md={8} sm={12} xs={12}>
					<div className="items-info d-flex justify-content-between p-3 mb-3">
						<div className="check-and-info d-flex">
							<span><input type="checkbox" name="isSelect" id="select-all"/></span>
							<span className="mr-1">Select all items</span>
							<span className="sub-info">(2 items selected)</span>
						</div>
						<span className="items-delete">Delete</span>
					</div>
					<div className="bag-items">
						{this.state.myBag && this.state.myBag.map((product, index) => {
							return (
								<div className="bag-item d-flex justify-content-between p-3" key={index}>
									<div className="check-and-info d-flex">
										<span><input type="checkbox" name="isSelect" /></span>
										<div className="detail-item d-flex ml-1">
											<div className="detail-img ml-2" style={{ backgroundImage: `url('${product.product_image}')` }}></div>
											<div className="detail-info ml-2 d-flex flex-column pt-3">
												<span className="title-info">{product.product_name}</span>
												<span className="brand-info">{product.product_brand}</span>
											</div>
										</div>
									</div>
									<div className="update-num d-flex justify-content-between pt-3">
										<span className="min-btn">-</span>
										<span className="info-num">{product.product_qty}</span>
										<span className="plus-btn">+</span>
									</div>
									<div className="item-price">
										<span>IDR {product.product_price * product.product_qty}</span>
									</div>
								</div>
							)
						})}

					</div>
				</Col>
				<Col xl={4} lg={4} md={4} sm={12} xs={12}>
					<div className="shopping-summary p-4">
						<span className="summary-title">Shopping summary</span>
						<div className="price-info d-flex justify-content-between mt-4 mb-3">
							<p className="text-price">Total Price</p>
							<p className="price-count">IDR {this.state.totalPrice}</p>
						</div>
						<Link to={{ pathname: '/checkout' }}>
							<div className="btn-buy" >
								<span>Buy</span>
							</div>
						</Link>
					</div>
				</Col>
			</Row>
		)
	}
}
