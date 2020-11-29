import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
	return (
		<div>
			<h1>Login</h1>
			<p>Go to <Link to={{ pathname: '/' }}>Home</Link></p>
		</div>
	)
}
