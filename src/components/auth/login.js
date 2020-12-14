import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import { activeButton } from '../../helpers/function'

import './auth.css'

const loginUser = (history) => {
	history.push({ pathname: '/' })
}

const Login = ({ history }) => {
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
				<div className="cs-btn-submit" onClick={() => loginUser(history)}>
					<span>Primary</span>
				</div>
			</section>
			<section id="seller" className="content-part">
				<input type="text" className="cs-form" placeholder="Email" />
				<input type="password" className="cs-form" placeholder="Password" />
				<Link to={{ pathName: '/forgot' }} className="forgot-pass">Forgot Password?</Link>
				<div className="cs-btn-submit" onClick={() => loginUser(history)}>
					<span>Primary</span>
				</div>
			</section>
			<section className="redirect">
				Don't have a Tokopedia account? <Link to={{ pathname: '/register' }}>Register</Link>
			</section>
		</div>
	)
}

export default Login
