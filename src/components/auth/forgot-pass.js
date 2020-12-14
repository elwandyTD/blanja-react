import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

import './auth.css'

const forgotPass = (history) => {
	history.push({ pathname: '/confirm' })
}

export default function ForgotPass({ history }) {
	return (
		<div className="cs-container">
			<div className="logo">
				<img src={Logo} alt="" />
				<span className="logo-text">Blanja</span>
			</div>
			<p className="med-text reset-pass">Reset Password</p>
			<section className="content-part show-section">
				<input type="text" className="cs-form" placeholder="Email" />
				<div className="cs-btn-submit mt-4" onClick={() => forgotPass(history)}>
					<span>Primary</span>
				</div>
			</section>
			<section className="redirect">
				<p>Don't have a Tokopedia account? <Link to={{ pathname: '/login' }}>Register</Link></p>
			</section>
		</div>
	)
}
