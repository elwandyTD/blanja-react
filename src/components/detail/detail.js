// import React, { Component } from 'react'
import React, { useState } from 'react'
// import {  useHistory } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import { connect } from 'react-redux'
// import Products from '../products/products'

import './detail.css'

const DetailProduct = ({ product, mprops }) => {
	// let newProduct = {}
	const [qty, setQty] = useState(1)
	// const [color, setColor] = useState(product.length === 0 ? '' : product.product_colors[0].product_color_id )
	// const products = useHistory().location.state.products
	const settings = {
		speed: 500,
		infinite: false,
		slidesToShow: 5,
	}

	const minQty = () => {
		if (qty !== 1) {
			setQty(qty - 1)
		}
	}
	const plusQty = () => setQty(qty + 1)

	// const addToBag = () => {
	// 	const myBag = JSON.parse(localStorage.getItem('bag'))

	// 	if (color === '') {
	// 		return alert('Silahkan pilih warna')
	// 	}
		
	// 	newProduct = {
	// 		product_id: product.product_id,
	// 		product_name: product.product_title,
	// 		product_brand: product.length === 0 ? '' : product.brand_name,
	// 		product_color_id: color,
	// 		product_price: product.length === 0 ? '' : product.product_price,
	// 		product_image: product.length === 0 ? '' : product.product_images[0].product_attr_value,
	// 		product_qty: qty
	// 	}

	// 	if (myBag) {
	// 		myBag.push(newProduct)
	// 		localStorage.setItem('bag', JSON.stringify(myBag))
	// 	} else {
	// 		const data = [newProduct]
	// 		localStorage.setItem('bag', JSON.stringify(data))
	// 	}
	// }
	
	// const addColor = (newColor) => setColor(newColor)

	// console.log(mprops)
	// const 

	return (
		<>
			<p className="detail-breadcumb mb-4">Home &gt; Category &gt; <b>{product.category_name}</b></p>
			<Row>
				<Col xl={5} lg={5} md={6} sm={12} xs={12}>
					<Row>
						<Col className="d-flex">
							<div className="show-image" style={{ backgroundImage: `url('${product.length === 0 ? '' : process.env.REACT_APP_API_URL + product.product_images[0].image_path }')` }}></div>
						</Col>
					</Row>
					<Row className="mt-1">
						<div className="images-more">
							<Slider {...settings}>
								{product.product_images &&  product.product_images.map((image, index) => {
									return <div className="image-item" key={index}><img src={process.env.REACT_APP_API_URL + image.image_path} alt=""/></div>
								})}

							</Slider>
						</div>
					</Row>
				</Col>
				<Col xl={7} lg={7} md={6} sm={12} xs={12}>
					<div className="detail-product d-flex flex-column">
						<p className="detail-title">{product.product_title}</p>
						<span className="txt-small" id="brand-name">{product.brand_name}</span>
						<span className="detail-rating">
							<Rater total={5} rating={2} interactive={false} />
							<span className="people">(10)</span>
						</span>
						<span className="txt-small" id="price-txt">Price</span>
						<span className="detail-price">IDR {new Intl.NumberFormat().format(product.product_price)}</span>
						<span className="txt-color">Color</span>
						<div className="colors d-flex mt-1">
							{/* {product.product_colors.length && product.product_colors.map((color, index) => {
								return (
									<div className="color-item" key={index}>
										<div style={{ backgroundColor: color.product_attr_value }}></div>
									</div>
								)
							})} */}

							{console.log(product.product_colors && product.product_colors)}
						</div>
						<div className="size-qty d-flex">
							<div className="sizes">
								<span className="txt-color">Size</span>
								<div className="size-product d-flex">
									<div className="min-btn">
										<span>-</span>
									</div>
									<div className="current-size">
									{/* {product.length === 0 ? '' : product.product_sizes[0].product_attr_value.toUpperCase() } */} XL
									</div>
									<div className="plus-btn">
										<span>+</span>
									</div>
								</div>
							</div>
							<div className="qty-product d-flex">
								<div className="quantity">
									<span className="txt-color">Jumlah</span>
									<div className="quantity-product d-flex">
										<div className="min-btn" onClick={() => minQty()}>
											<span>-</span>
										</div>
										<div className="current-size">
											{qty}
										</div>
										<div className="plus-btn" onClick={() => plusQty()}>
											<span>+</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<Row className="mt-3">
							<Col xl={3} lg={3} md={6} sm={6} xs={6}>
								<div className="btn-detail">
									<span>Chat</span>
								</div>
							</Col>
							<Col xl={3} lg={3} md={6} sm={6} xs={6}>
								<div className="btn-detail" >
									<span>Add bag</span>
								</div>
							</Col>
							<Col xl={6} lg={6} md={12} sm={12} xs={12}>
								<div className="btn-detail btn-buy-detail">
									<span>Buy Now</span>
								</div>
							</Col>
						</Row>
						<Row>
							<Col xl={3} lg={3} md={6} sm={6} xs={12}>
								<div className="btn-detail btn-buy-detail">
									<span>Delete</span>
								</div>
							</Col>
						</Row>
					</div>
				</Col>	
			</Row>
			<Row className="mt-4">
				<Col>
					<p className="detail-title">Product Information</p>
					<div className="condition-product d-flex flex-column mt-3">
						<span className="txt-condition">Condition</span>
						<span className="txt-condition condition">{product.product_condition}</span>
					</div>
					<div className="description-product mt-3">
						<span className="txt-condition">Description</span>
						<pre className="desc-text">{product.product_description}</pre>
					</div>
					<div className="review-product mt-4">
						<p className="detail-title mt-4">Product Review</p>
						<div className="for-rating d-flex mt-4">
							<div className="box-review">
								<div className="rating-num">
									<span className="big-num">5.0</span>
									<span className="small-num">/10</span>
								</div>
								<div className="rating-star">
									<Rater total={5} rating={2} interactive={false} />
								</div>
							</div>
							<div className="box-people">
								<div className="count-people d-flex justify-content-between">
									<span className="star-num d-flex justify-content-between">
										<Rater total={1} rating={1} interactive={false} />
										<span>5</span>
									</span>
									<div className="bar-people"></div>
									<span>4</span>
								</div>
								<div className="count-people d-flex justify-content-between">
									<span className="star-num d-flex justify-content-between">
										<Rater total={1} rating={1} interactive={false} />
										<span>4</span>
									</span>
									<div className="bar-people bg-white"></div>
									<span>0</span>
								</div>
								<div className="count-people d-flex justify-content-between">
									<span className="star-num d-flex justify-content-between">
										<Rater total={1} rating={1} interactive={false} />
										<span>3</span>
									</span>
									<div className="bar-people bg-white"></div>
									<span>0</span>
								</div>
								<div className="count-people d-flex justify-content-between">
									<span className="star-num d-flex justify-content-between">
										<Rater total={1} rating={1} interactive={false} />
										<span>2</span>
									</span>
									<div className="bar-people bg-white"></div>
									<span>0</span>
								</div>
								<div className="count-people d-flex justify-content-between">
									<span className="star-num d-flex justify-content-between">
										<Rater total={1} rating={1} interactive={false} />
										<span>1</span>
									</span>
									<div className="bar-people bg-white"></div>
									<span>0</span>
								</div>
							</div>
						</div>
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<div className="cs-divider"></div>
				</Col>
			</Row>
			<Row>
				<Col>
					{/* <Products title="You can also like this" subtitle="You’ve never seen it before!" products={products} /> */}
				</Col>
			</Row>
			{/* {console.log(product && product)} */}
		</>
	)
}

const mapsStateToProps = ({ product }) => {
	return {
		product
	}
}

export default connect(mapsStateToProps)(DetailProduct)

