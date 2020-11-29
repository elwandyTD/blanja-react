import React from 'react'
import { Navbar, Container, Dropdown } from 'react-bootstrap'

import './navbar.css'
import Logo from '../../assets/images/logo.png'
import SearchIcon from '../../assets/icons/search.png'
import FilterIcon from '../../assets/icons/filter.png'
import CartIcon from '../../assets/icons/cart.png'
import UserIcon from '../../assets/icons/user.png'


export default function CustomNavbar() {
	return (
		<>
			<Navbar bg="white" expand="lg" fixed="top">
				<Container>
					<Navbar.Brand href="#home">
						<img alt="" src={Logo} className="d-inline-block align-top" /> {' '}
						<span>Blanja</span>
					</Navbar.Brand>
					<div className="search-section-md">
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

						<img className="cs-cart" src={CartIcon} alt="Cart" />
						<div className="cs-btn-login btn-auth">Login</div>
						<div className="cs-btn-signup btn-auth">Sign up</div>
						
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
			<div className="stabilizer"></div>
		</>
	)
}
