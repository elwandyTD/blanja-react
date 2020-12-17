import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getProducts } from '../../redux/actionCreators/Product'

import './store.css'

class MyStore extends Component {

	getMyProductsDispatch = () => {
		this.props.dispatch(getProducts('?user_id=2&order=newest&sort=desc'))
	}

	componentDidMount = () => {
		this.getMyProductsDispatch()
	}

	render() {
		const { product } = this.props

		return (
			<>
				<div className="cs-card-detail">
					<Container>
						<Row className="cs-card-header">
							<Col>
								<span className="card-detail-title">My Products</span>
							</Col>
						</Row>
						<hr/>
						<Row className="cs-card-body">
							<Col xl={12} lg={12} md={12} sm={12} xs={12} className="mytable-side">
								<table className="all-products">
									<thead>
										<tr>
											<th>No</th>
											<th width="60%">Product name</th>
											<th>Price</th>
											<th>Stock</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										{product.products.data && product.products.data.products.map((myProduct, index) => {
											return (
												<tr key={index}>
													<td className="text-center">{index + 1} </td>
													<td>{myProduct.product_title} </td>
													<td>{new Intl.NumberFormat().format(myProduct.product_price)}</td>
													<td>{myProduct.product_qty}</td>
													<td>
														<Link to={{ pathname: '/' }}>Edit</Link><br/>
														<Link to={{ pathname: '/' }}>Hapus</Link>
													</td>
												</tr>
											)
										}) }
									</tbody>
									{/* <tr>
										<td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime hic libero incidunt. Illum sed maiores, eius cum iusto veniam omnis quis recusandae, corporis autem tempore harum quos nobis quas odio?</td>
										<td>65000</td>
										<td>15</td>
										<td>
											<Link to={{ pathname: '/' }}>Edit</Link><br/>
											<Link to={{ pathname: '/' }}>Hapus</Link>
										</td>
									</tr> */}
								</table>
								
							</Col>
						</Row>
					</Container>
				</div>
			</>
		)
	}
}

const mapsStateToProps = ({ product }) => {
	return {
		product
	}
}

export default connect(mapsStateToProps)(MyStore)