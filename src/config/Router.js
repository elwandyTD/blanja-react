import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Login from '../pages/auth/Login'
import Home from '../pages/Home'
import Products from '../pages/Products'
import DetailProduct from '../pages/DetailProduct'
import MyBag from '../pages/MyBag'
import Checkout from '../pages/Checkout'
import AdminPage from '../pages/AdminPage'
import Register from '../pages/auth/Register'
// import Forgot from '../pages/'

export default function Router() {
	return (
		<BrowserRouter>
			<Route exact path="/" component={Home} />
			<Route path="/products" component={Products} />
			<Route path="/product/:id" component={DetailProduct} />
			<Route path="/bag" component={MyBag} />
			<Route path="/checkout" component={Checkout} />
			<Route path="/post" component={AdminPage} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
			<Route path="/forgot" component={Login} />
			<Route path="/confirm" component={Login} />
			

		</BrowserRouter>
	)
}
