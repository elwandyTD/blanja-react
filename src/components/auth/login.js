import React, { useState } from 'react'
import { Link } from 'react-router-dom'


import Logo from '../../assets/images/logo.png'
import { activeButton } from '../../helpers/function'


import './auth.css'

const Login = ({ submitForm, error }) => {
	const [customerForm, setCustomerForm] = useState({
		user_email: '',
		user_password: ''
	})

	const [sellerForm, setSellerForm] = useState({
		user_email: '',
		user_password: ''
	})

	const customerHandler = (e) =>{
		const value = e.target.value
		setCustomerForm({
			...customerForm,
			[e.target.name]: value
		})
 	}

	const sellerHandler = (e) =>{
		const value = e.target.value
		setSellerForm({
			...sellerForm,
			[e.target.name]: value
		})
 	}

	const submitButton = (data, type) => {
		submitForm(data, type)
	}

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

			{error !== '' ? <span className="text-danger mt-3">{error}</span> : <span className="text-danger mt-3"></span> }

			<section id="customer" className="content-part show-section ">
				<input type="email" className="cs-form" placeholder="Email" name="user_email" value={customerForm.user_email} onChange={customerHandler} />
				<input type="password" className="cs-form" placeholder="Password" name="user_password" value={customerForm.user_password} onChange={customerHandler} />
				<Link to={{ pathname: '/forgot' }} className="forgot-pass">Forgot Password?</Link>
				<div className="cs-btn-submit" onClick={() => submitButton(customerForm, 'customer')}>
					<span>Primary</span>
				</div>
			</section>
			<section id="seller" className="content-part">
				<input type="email" className="cs-form" placeholder="Email" name="user_email" value={sellerForm.user_email} onChange={sellerHandler} />
				<input type="password" className="cs-form" placeholder="Password" name="user_password" value={sellerForm.user_password} onChange={sellerHandler} />
				<Link to={{ pathname: '/forgot' }} className="forgot-pass">Forgot Password?</Link>
				<div className="cs-btn-submit" onClick={() => submitButton(sellerForm, 'seller')}>
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
