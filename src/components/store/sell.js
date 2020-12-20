import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import axios from 'axios'

// import { postProduct } from '../../redux/actionCreators/Product'

import './store.css'

const SellProduct = ({ attribute, history }) => {

	const [dataForm, setDataForm] = useState({
		title: '',
		price: 0,
		qty: 0,
		category: '',
		brand: '',
		condition: '',
		desc: '',
		images: [],
	})

	const dataHandler = (e) => {
		const value = e.target.value
		setDataForm({
			...dataForm,
			[e.target.name]: value
		})
	}
	 
	const imageHandler = (e) => {
		const value = e.target.files

		setDataForm({
			...dataForm,
			images: value
		})
	}

	const myPostProduct = () => {
		let formData = new FormData()

		formData.append('user_id', 2)
		formData.append('product_title', dataForm.title)
		formData.append('brand_id', Number(dataForm.brand))
		formData.append('category_id', Number(dataForm.category))
		formData.append('product_price', Number(dataForm.price))
		formData.append('product_qty', Number(dataForm.qty))
		formData.append('product_condition', dataForm.condition)
		formData.append('product_description', dataForm.desc)
		for (let i = 0; i < dataForm.images.length; i ++) {
			formData.append('upload_images', dataForm.images[i])
		}

		// const token = localStorage.getItem('token')

		axios.post(process.env.REACT_APP_API_URL + '/product', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			}
		})
		.then((data) => {
			console.log(data)
			setDataForm({
				title: '',
				price: 0,
				qty: 0,
				category: '',
				brand: '',
				condition: '',
				desc: '',
				images: [],
			})
			history.push({
				pathname: '/store'
			})
		})
		.catch((err) => {
			console.log(err)
		})
	}

	return (
		<>
			<div className="cs-card-detail">
				<Container>
					<Row className="cs-card-header">
						<Col>
							<span className="card-detail-title">Inventory</span>
						</Col>
					</Row>
					<hr/>
					<Row className="cs-card-body">
						<Col xl={8} lg={8} md={8} sm={12} xs={12}>
							<div className="cs-input-group">
								<div className="cs-input-label d-block cs-input-new">Name of goods</div>
								<div className="cs-input-form d-block">
									<input type="text" name="title" onChange={dataHandler} />
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="cs-card-detail">
				<Container>
					<Row className="cs-card-header">
						<Col>
							<span className="card-detail-title">Item details</span>
						</Col>
					</Row>
					<hr/>
					<Row className="cs-card-body">
					<Col xl={8} lg={8} md={8} sm={12} xs={12}>
							<div className="cs-input-group">
								<div className="cs-input-label d-block cs-input-new">Category</div>
								<div className="cs-input-form d-block">
									<select name="category" id="" onChange={dataHandler}>
										{attribute.categories.data && attribute.categories.data.map((category, index) => {
											return <option key={index} value={category.category_id}>{category.category_name}</option>
										})}
									</select>
								</div>
							</div>
						</Col>
						<Col xl={8} lg={8} md={8} sm={12} xs={12}>
							<div className="cs-input-group">
								<div className="cs-input-label d-block cs-input-new">Brands</div>
								<div className="cs-input-form d-block">
									<select name="brand" id="" onChange={dataHandler}>
										{attribute.brands.data && attribute.brands.data.map((brand, index) => {
											return <option key={index} value={brand.brand_id}>{brand.brand_name}</option>
										})}
									</select>
								</div>
							</div>
						</Col>
						<Col xl={8} lg={8} md={8} sm={12} xs={12}>
							<div className="cs-input-group">
								<div className="cs-input-label d-block cs-input-new">Unit price</div>
								<div className="cs-input-form d-block">
									<input type="text" name="price" placeholder="" onChange={dataHandler}/>
								</div>
							</div>
						</Col>
						<Col xl={8} lg={8} md={8} sm={12} xs={12}>
							<div className="cs-input-group">
								<div className="cs-input-label d-block cs-input-new">Stock</div>
								<div className="cs-input-form d-block">
									<input type="text" name="qty" placeholder="" onChange={dataHandler}/>
								</div>
							</div>
						</Col>
						<Col xl={8} lg={8} md={8} sm={12} xs={12}>
							<div className="cs-input-group">
								<div className="cs-input-label d-block cs-input-new">Condition</div>
								<div className="cs-input-form d-block">
									{/* <input type="text" placeholder=""/> */}
									<select name="condition" id="" onChange={dataHandler}>
										<option value="New">New</option>
										<option value="Used">Used</option>
										<option value="Broken">Broken</option>
									</select>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="cs-card-detail">
				<Container>
					<Row className="cs-card-header">
						<Col>
							<span className="card-detail-title">Photo of goods</span>
						</Col>
					</Row>
					<hr/>
					<Row className="cs-card-body">
						<Col xl={8} lg={8} md={8} sm={12} xs={12}>
							<div className="cs-input-group">
								<div className="cs-input-label d-block cs-input-new">Main photo</div>
								<div className="cs-input-form d-block">
									<input type="file" onChange={(e) => imageHandler(e)} multiple/>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="cs-card-detail">
				<Container>
					<Row className="cs-card-header">
						<Col>
							<span className="card-detail-title">Description</span>
						</Col>
					</Row>
					<hr/>
					<Row className="cs-card-body">
						<Col xl={12} lg={12} md={12} sm={12} xs={12}>
							<div className="cs-input-group">
								<div className="cs-input-label d-block cs-input-new">Description of good</div>
								<div className="cs-input-form d-block">
									<textarea name="desc" id="" cols="30" rows="30" onChange={dataHandler}></textarea>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="cs-btn-submit text-center mb-4" style={{ width: "100px" }} onClick={myPostProduct} >
					<span>Jual</span>
				</div>
		</>
	)
}

const mapsStateToProps = ({ product, attribute }) => {
	return {
		product,
		attribute
	}
}

export default connect(mapsStateToProps)(SellProduct)