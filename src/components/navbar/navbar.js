import React, {Component} from 'react'
import { Navbar, Container, Dropdown, Modal, Button, Row, Form } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom";
import axios from 'axios'

import './navbar.css'
import Logo from '../../assets/images/logo.png'
import SearchIcon from '../../assets/icons/search.png'
import FilterIcon from '../../assets/icons/filter.png'
import CartIcon from '../../assets/icons/cart.png'
import UserIcon from '../../assets/icons/user.png'

export default class navbar extends Component {
	state = {
		query: {
			color: '',
			size: '',
			brand: ''
		},
		history: [],
		allColor: [],
		allBrand: [],
		show: false,
		queryProducts: '',
	}

	handleClose = () => this.setState({ show: false })
	handleShow = () => this.setState({ show: true })

	getAllColor = () => {
		const url = "http://localhost:8000/attribute/colors"

		axios
		.get(url)
		.then(({ data }) => {
			this.setState({
				allColor: data
			})
		})
		.catch((e) => {
			console.log(e)
		})
	}

	getAllBrand = () => {
		const url = "http://localhost:8000/attribute/brands"

		axios
		.get(url)
		.then(({ data }) => {
			this.setState({
				allBrand: data
			})
		})
		.catch((e) => {
			console.log(e)
		})
	}

	getAndSendQuery = (type) => {
		// const { location } = this.props
		const searchKey = document.getElementById("search-" + type).value

		let q = ''
		if (searchKey) q += `key=${searchKey}&`
		if (this.state.query.color) q += `color=${this.state.query.color}&`
		if (this.state.query.size) q += `size=${this.state.query.size}&`
		if (this.state.query.brand) q += `brand=${this.state.query.brand}&`

		this.setState({
			queryProduct: q
		})
		// console.log(this.props)
	}

	getColor = (event) => {
		const color = event.currentTarget.dataset.color
	
		this.setState({
			query: {
				color: color
			}
		})
	}
	
	getSize = (event) => {
		const size = event.currentTarget.dataset.size
	
		this.setState({
			query: {
				size: size
			}
		})
	}
	
	getBrand = () => {
		const brand = document.getElementById("select-brand").value
	
		this.setState({
			query: {
				brand: brand
			}
		})
	}

	componentDidMount = () => {
		this.getAllBrand()
		this.getAllColor()
	}

	render() {
		// console.log(process.env.REACT_APP_API_URL)
		// console.log(this.props.props)

		return (
			<>
			<Navbar bg="white" expand="lg" fixed="top">
				<Container>
					<Link to={{ pathname: '/' }}>
						<Navbar.Brand >
							<img alt="" src={Logo} className="d-inline-block align-top" /> {' '}
							<span>Blanja</span>
						</Navbar.Brand>
					</Link>
					<div className="search-section-md">
						<div className="search-input d-inline-block">
							<input type="text" className="cs-search" placeholder="Search" id="search-md" />
							{/* <Link to={{ pathname: '/products?' + this.state.queryProduts }}>
								<div className="search-icon d-inline-block">
									<img src={SearchIcon} alt="search" height="18" width="18" />
								</div>
							</Link> */}
							<div className="search-icon d-inline-block" onClick={() => this.getAndSendQuery('md')}>
								<img src={SearchIcon} alt="search" height="18" width="18" />
							</div>
						</div>
						<span className="filter-button d-inline" onClick={this.handleShow}>
							<img src={FilterIcon} alt="filter" height="15" width="17" />
						</span>
					</div>
					<div className="cs-btn-group-medium">
						<Dropdown>
							<Dropdown.Toggle id="dropdown-search">
								<img src={SearchIcon} alt="user" />
							</Dropdown.Toggle>
							<Dropdown.Menu align="right" id="search-dropdown-menu" className="mt-2">
								<Dropdown.Header>Search and filter</Dropdown.Header>
								<div className="search-section-sm">
									<div className="search-input d-inline-block">
										<input type="text" className="cs-search" placeholder="Search" />
										<div className="search-icon d-inline-block">
											<img src={SearchIcon} alt="search" height="18" width="18" />
										</div>
									</div>
									<span className="filter-button d-inline">
										<img src={FilterIcon} alt="filter" height="15" width="17" />
									</span>
								</div>
							</Dropdown.Menu>
						</Dropdown>
						<Link to={{ pathname: '/bag' }}>
							<img className="cs-cart" src={CartIcon} alt="Cart" />
						</Link>
						<Link to={{ pathname: '/login' }}>
							<div className="cs-btn-login btn-auth">Login</div>
						</Link>
						<Link to={{ pathname: '/register' }}>
							<div className="cs-btn-signup btn-auth">Sign up</div>
						</Link>
						
						<Dropdown>
							<Dropdown.Toggle id="dropdown-auth">
								<img src={UserIcon} alt="user" />
							</Dropdown.Toggle>
							<Dropdown.Menu align="right">
								<Dropdown.Header>Account</Dropdown.Header>
								<Dropdown.Item href="" id="login-item">Login</Dropdown.Item>
								<Dropdown.Item href="" id="signin-item">Sign in</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						
					</div>
				</Container>
			</Navbar>
			<Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
					<Row className="d-flex flex-column pl-5 pr-5 pt-4">
						<div className="title-part">
							<h4>Colors</h4>
						</div>
						<div className="row-color d-flex">
							{this.state.allColor.data && this.state.allColor.data.map((color, index) => {
								if (index < 7) {
									return (
										<div className="color-item" key={index} data-color={color.color_code} style={{ backgroundColor: color.color_code }} onClick={(event)=> this.getColor(event)}></div>
									)
								}
								return ''
							})}
						</div>
					</Row>
					<hr className="cs-divider" />
					<Row className="d-flex flex-column pl-5 pr-5 pt-2">
						<div className="title-part">
							<h4>Size</h4>
						</div>
						<div className="row-size d-flex">
							<div className="size-item" data-size="xs" onClick={(event) => this.getSize(event)}>
								<span>xs</span>
							</div>
							<div className="size-item" data-size="s" onClick={(event) => this.getSize(event)}>
								<span>s</span>
							</div>
							<div className="size-item cs-btn-active" data-size="m" onClick={(event) => this.getSize(event)}>
								<span>m</span>
							</div>
							<div className="size-item" data-size="l" onClick={(event) => this.getSize(event)}>
								<span>l</span>
							</div>
							<div className="size-item" data-size="xs" onClick={(event) => this.getSize(event)}>
								<span>xl</span>
							</div>
						</div>
					</Row>
					<hr className="cs-divider" />
					<Row className="d-flex flex-column pl-5 pr-5 pt-2">
						<div className="title-part">
							<h4>Tags</h4>
						</div>
						<div className="row-category d-flex flex-wrap">
							<div className="category-item cs-btn-active">
								<span>all</span>
							</div>
							<div className="category-item">
								<span>women</span>
							</div>
							<div className="category-item">
								<span>men</span>
							</div>
							<div className="category-item">
								<span>boys</span>
							</div>
							<div className="category-item">
								<span>girls</span>
							</div>
						</div>
					</Row>
					<hr className="cs-divider" />
					<Row className="d-flex flex-column pl-5 pr-5 pt-2">
						<div className="title-part">
							<span style={{ fontWeight: "bold" }} >Brand</span>
						</div>
						<span className="brand-span">There is a lot of brand we have</span>
						<Form.Control as="select" id="select-brand" onChange={() => this.getBrand()}>
							<option value="">Select Brand</option>
							{this.state.allBrand.data && this.state.allBrand.data.map((brand, index) => {
								return (
									<option key={index} value={brand.brand_name}>{brand.brand_name}</option>
								)
							})}
						</Form.Control>
					</Row>
					<hr className="cs-divider" />
				</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
			<div className="stabilizer"></div>
		</>
		)
	}
}
