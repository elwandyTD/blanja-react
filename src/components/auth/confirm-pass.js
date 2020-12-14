import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

import './auth.css'

const confirmPassword = (history) => {
	history.push({ pathname: '/login' })
}

export default function ConfirmPass({ history }) {
	return (
		<div className="cs-container">
			<div className="logo">
				<img src={Logo} alt="" />
				<span className="logo-text">Blanja</span>
			</div>
					<p className="med-text reset-pass">Reset Password</p>
					<p className="sml-text">You need to change your password to activate your account</p>
			<section className="content-part show-section">
				<input type="password" className="cs-form" placeholder="Password" />
				<input type="password" className="cs-form" placeholder="Confirmation New Password" />
				<div className="cs-btn-submit mt-4" onClick={() => confirmPassword(history)}>
					<span>Primary</span>
				</div>
			</section>
			<section className="redirect">
				<p>Don't have a Tokopedia account? <Link to={{ pathname: '/register' }}>Register</Link></p>
			</section>
		</div>
	)
}
