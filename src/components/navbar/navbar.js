import React, {Component} from 'react'
import { Navbar, Container, Dropdown, Modal, Button, Row, Form } from 'react-bootstrap'
import { Link, withRouter } from "react-router-dom";
// import axios from 'axios'
import { connect } from 'react-redux'
import { getColors, getBrands, getCategories, getSizes } from '../../redux/actionCreators/Attribute'
import { logoutUser } from '../../redux/actionCreators/Auth'

import './navbar.css'
import Logo from '../../assets/images/logo.png'
import SearchIcon from '../../assets/icons/search.png'
import FilterIcon from '../../assets/icons/filter.png'
import CartIcon from '../../assets/icons/cart.png'
import UserIcon from '../../assets/icons/user.png'
import NotifIcon from '../../assets/icons/notification.png'
import MailIcon from '../../assets/icons/mail.png'

class MyNavbar extends Component {
	state = {
		query: {
			color: '',
			size: '',
			brand: '',
			category: '',
		},
		show: false,
		isLogin: false,
	}

	handleClose = () => this.setState({ show: false })
	handleShow = () => this.setState({ show: true })

	getColorsDispatch = () => {
		this.props.dispatch(getColors())
	}

	getBrandsDispatch = () => {
		this.props.dispatch(getBrands())
	}
	
	getCategoriesDispatch = () => {
		this.props.dispatch(getCategories())
	}

	getSizesDispatch = () => {
		this.props.dispatch(getSizes())
	}

	getAndSendQuery = (type) => {
		const { history } = this.props
		const searchKey = document.getElementById("search-" + type).value

		let q = '?'
		if (searchKey) {
			q += `search=${searchKey}&` 
		}
		if (this.state.query.color) {
			const queryColor = this.state.query.color.slice(1, this.state.query.color.length)
			q += `color=${queryColor}&`
		}
		if (this.state.query.size) q += `size=${this.state.query.size}&`
		if (this.state.query.brand) q += `brand=${this.state.query.brand}&`
		if (this.state.query.category) q += `category=${this.state.query.category}&`

		let queries = ''
		if (q === '?') {
			queries = ''
		} else {
			queries = q.slice(0, q.length - 1)
		}

		history.push({
			pathname: '/product',
			search: queries
		})
	}

	getColor = (event) => {
		const color = event.currentTarget.dataset.color
	
		this.setState({
			query: {
				...this.state.query,
				color,
			}
		})
	}
	
	getSize = (event) => {
		const size = event.currentTarget.dataset.size
	
		this.setState({
			query: {
				...this.state.query,
				size,
			}
		})
	}
	
	getCategory = (event) => {
		const category = event.currentTarget.dataset.category
	
		this.setState({
			query: {
				...this.state.query,
				category
			}
		})
	}
	
	getBrand = () => {
		const brand = document.getElementById("select-brand").value
	
		this.setState({
			query: {
				...this.state.query,
				brand: brand
			}
		})
	}

	logoutUser = async (e) => {
		e.preventDefault()
		const user = JSON.parse(localStorage.getItem('user'))
		
		if ( user ) {
			await this.props.dispatch(logoutUser('Bearer ' + user.token ))

			localStorage.removeItem('user')

			this.setState({
				isLogin: false
			})

			const { history } = this.props
			history.push('/')
		}
	}

	setNavbar = () => {
		const user = JSON.parse(localStorage.getItem('user'))
		if (user) {
			this.setState({
				isLogin: true
			})
		}
	}

	notLoginNavbar = () => {
		return (
			<>
				<Link to={{ pathname: '/bag' }}>
					<img className="cs-cart" src={CartIcon} alt="Cart" />
				</Link>
				<Link to={{ pathname: '/login' }}>
					<div className="cs-btn-login btn-auth">Login</div>
				</Link>
				<Link to={{ pathname: '/register' }}>
					<div className="cs-btn-signup btn-auth">Sign up</div>
				</Link>
			</>
		)
	}

	loginNavbar = () => {
		return (
			<>
				<Link to={{ pathname: '/bag' }}>
					<img className="cs-cart" src={CartIcon} alt="Cart" />
				</Link>
				<Link to={{ pathname: '/' }}>
					<img className="cs-cart remove-low" src={NotifIcon} alt="Notification" />
				</Link>
				<Link to={{ pathname: '/' }}>
					<img className="cs-cart remove-low" src={MailIcon} alt="Mail" />
				</Link>
				<Dropdown>
					<Dropdown.Toggle id="dropdown-auth-login">
						<img src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png" alt="user" />
					</Dropdown.Toggle>
					<Dropdown.Menu align="right" className="cs-dropdown-auth-2">
						<Dropdown.Header className="display-low">Information</Dropdown.Header>
						<Link to={{ pathname: '/' }} className="dropdown-item display-low" id="login-item">Notification</Link>
						<Link to={{ pathname: '/' }} className="dropdown-item display-low" id="signin-item">Mail</Link>
						<Dropdown.Header>Account</Dropdown.Header>
						<Link to={{ pathname: '/profile' }} className="dropdown-item" id="signin-item">Profile</Link>
						<Dropdown.Header>Auth</Dropdown.Header>

						<Dropdown.Item href="/" onClick={this.logoutUser}>Logout</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</>
		)
	}

	componentDidMount = () => {
		this.setNavbar()
		this.getColorsDispatch()
		this.getBrandsDispatch()
		this.getCategoriesDispatch()
		this.getSizesDispatch()
	}

	render() {
		const { attribute } = this.props

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
							<div className="search-icon d-inline-block" onClick={() => this.getAndSendQuery('md')}>
								<img src={SearchIcon} alt="search" height="18" width="18" />
							</div>
						</div>
						<span className="filter-button d-inline" onClick={this.handleShow}>
							<img src={FilterIcon} alt="filter" height="15" width="17" />
						</span>
					</div>
					<div className={this.state.isLogin ? "cs-btn-group-medium" : "cs-btn-group-medium cs-is-not-login" }>
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

						{this.state.isLogin ? this.loginNavbar() : this.notLoginNavbar()}
						
						{!this.state.isLogin && <Dropdown>
							<Dropdown.Toggle id="dropdown-auth">
								<img src={UserIcon} alt="user" />
							</Dropdown.Toggle>
							<Dropdown.Menu align="right">
								<Dropdown.Header>Account</Dropdown.Header>
								<Link to={{ pathname: '/login' }} className="dropdown-item" id="login-item">Login</Link>
								<Link to={{ pathname: '/register' }} className="dropdown-item" id="signin-item">Sign Up</Link>
							</Dropdown.Menu>
						</Dropdown>}
						
					</div>
				</Container>
			</Navbar>
			{/* Navbar end */}

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
							{attribute.colors.data && attribute.colors.data.map((color, index) => {
								return (
									<div className="color-item" key={index} data-color={color.color_code} style={{ backgroundColor: color.color_code }} onClick={(event)=> this.getColor(event)}></div>
								)
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
							<h4>Categories</h4>
						</div>
						<div className="row-category d-flex flex-wrap">
							{attribute.categories.data && attribute.categories.data.map((category, index) => {
								return (
								<div className="category-item" data-category={category.category_link} key={index} onClick={(event) => this.getCategory(event)}>
									<span>{category.category_name} </span>
								</div>
								)
							})}

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
							{attribute.brands.data && attribute.brands.data.map((brand, index) => {
								return (
									<option key={index} value={brand.brand_name}>{brand.brand_name}</option>
								)
							})}
						</Form.Control>
					</Row>
					<hr className="cs-divider" />
				</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
						this.setState({
							query: {
								color: '',
								size: '',
								brand: '',
								category: '',
							},
						})
						this.handleClose()
					}}>
            Discard
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

const mapsStateToProps = ({ attribute, auth }) => {
	return {
		attribute,
		auth
	}
}

export default connect(mapsStateToProps)(withRouter(MyNavbar))