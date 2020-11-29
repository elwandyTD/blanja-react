import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Login from '../pages/auth/Login'
import Home from '../pages/Home'

export default function Router() {
	return (
		<BrowserRouter>
			<Route exact path="/" component={Home} />
			<Route path="/login" component={Login} />
		</BrowserRouter>
	)
}
