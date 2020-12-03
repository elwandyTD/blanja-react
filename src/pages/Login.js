import React from 'react'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

import './auth/auth.css'

export default function Login() {
	return (
		<div className="cs-container">
			<div className="logo">
				<img src={Logo} alt="" />
				<span className="logo-text">Blanja</span>
			</div>
			<p className="med-text">Please login with your account</p>
			<div className="btn-type-account">
				<div className="cs-btn-type btn-customer active-type" data-id="customer">
					<span>Custommer</span>
				</div>
				<div className="cs-btn-type btn-seller" data-id="seller">
					<span>Seller</span>
				</div>
			</div>
			<section id="customer" className="content-part show-section">
				<input type="text" className="cs-form" placeholder="Email" />
				<input type="password" className="cs-form" placeholder="Password" />
				<a href="./auth/reset_pass_customer.html" className="forgot-pass">Forgot Password?</a>
				<Link to={{ pathname: '/' }}>
					<div className="cs-btn-submit">
						<span>Primary</span>
					</div>
				</Link>
			</section>
			<section id="seller" className="content-part">
				<input type="text" className="cs-form" placeholder="Email" />
				<input type="password" className="cs-form" placeholder="Password" />
				<a href="./auth/reset_pass_seller.html" className="forgot-pass">Forgot Password?</a>
				<Link to={{ pathname: '/' }}>
					<div className="cs-btn-submit">
						<span>Primary</span>
					</div>
				</Link>
			</section>
			<section className="redirect">
				<Link to={{  }}>Don't have a Tokopedia account? <a href="./auth/sign_up.html">Register</a></Link>
			</section>
		</div>
	)
}
