import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import { activeButton } from '../../helpers/function'

import './auth.css'

const registerUser = (history) => {
	history.push({ pathname: '/login' })
}

export default function Register({ history }) {
	return (
		<div className="cs-container">
			<div className="logo">
				<img src={Logo} alt="Logo" />
				<span className="logo-text">Blanja</span>
			</div>
			<p className="med-text">Please sign up with your account</p>
			<div className="btn-type-account">
				<div className="cs-btn-type btn-customer active-type" data-id="customer" onClick={activeButton}>
					<span data-id="customer">Custommer</span>
				</div>
				<div className="cs-btn-type btn-seller" data-id="seller" onClick={activeButton}>
					<span data-id="seller">Seller</span>
				</div>
			</div>
			<section id="customer" className="content-part show-section">
				<input type="text" className="cs-form" placeholder="Name" />
				<input type="text" className="cs-form" placeholder="Email" />
				<input type="password" className="cs-form" placeholder="Password" />
				<Link to={{ pathname: '/forgot' }} className="forgot-pass">Forgot Password?</Link>
				<div className="cs-btn-submit" onClick={() => registerUser(history)}>
					<span>Primary</span>
				</div>
			</section>
			<section id="seller" className="content-part">
				<input type="text" className="cs-form" placeholder="Name" />
				<input type="text" className="cs-form" placeholder="Email" />
				<input type="text" className="cs-form" placeholder="Phone number" />
				<input type="text" className="cs-form" placeholder="Store name" />
				<input type="password" className="cs-form" placeholder="Password" />
				<Link to={{ pathname: '/forgot' }} className="forgot-pass">Forgot Password?</Link>
				<div className="cs-btn-submit" onClick={() => registerUser(history)}>
					<span>Primary</span>
				</div>
			</section>
			<section className="redirect">
				<p>Already have a Tokopedia account? <Link to={{ pathname: '/login' }} href="../index.html">Login</Link></p>
			</section>
		</div>
	)
}
