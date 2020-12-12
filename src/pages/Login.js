import React from 'react'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import './auth/auth.css'

const activeButton = (e) => {
	const contentPartId = e.target.dataset.id
	const buttons = document.querySelectorAll(".cs-btn-type")
	const contentPartSection = document.querySelectorAll(".content-part")
	// remove class active-type and show-section
	buttons.forEach((item) => item.classList.remove("active-type"))
	contentPartSection.forEach((item) => item.classList.remove("show-section"))
	// add class active-type and show-section
	document.querySelector(`.btn-type-account div.btn-${contentPartId}`).classList.add("active-type")
	document.querySelector(`section#${contentPartId}`).classList.add("show-section")
}

const loginUser = () => {

}

export default function Login() {
	return (
		<div className="cs-container">
			<div className="logo">
				<img src={Logo} alt="" />
				<span className="logo-text">Blanja</span>
			</div>
			<p className="med-text">Please login with your account</p>
			<div className="btn-type-account">
				<div className="cs-btn-type btn-customer active-type" data-id="customer" onClick={activeButton}>
					<span data-id="customer">Custommer</span>
				</div>
				<div className="cs-btn-type btn-seller" data-id="seller" onClick={activeButton}>
					<span data-id="seller">Seller</span>
				</div>
			</div>
			<section id="customer" className="content-part show-section">
				<input type="text" className="cs-form" placeholder="Email" />
				<input type="password" className="cs-form" placeholder="Password" />
				<Link to={{ pathName: '/forgot' }} className="forgot-pass">Forgot Password?</Link>
				<div className="cs-btn-submit" onClick={loginUser}>
					<span>Primary</span>
				</div>
			</section>
			<section id="seller" className="content-part">
				<input type="text" className="cs-form" placeholder="Email" />
				<input type="password" className="cs-form" placeholder="Password" />
				<Link to={{ pathName: '/forgot' }} className="forgot-pass">Forgot Password?</Link>
				<div className="cs-btn-submit" onClick={loginUser}>
					<span>Primary</span>
				</div>
			</section>
			<section className="redirect">
				Don't have a Tokopedia account? <Link to={{ pathname: '/register' }}>Register</Link>
			</section>
		</div>
	)
}
