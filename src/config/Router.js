import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Login from '../pages/Login'
import Home from '../pages/Home'
import Products from '../pages/Products'
import DetailProduct from '../pages/DetailProduct'
import MyBag from '../pages/MyBag'
import Checkout from '../pages/Checkout'
import AdminPage from '../pages/AdminPage'

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
			{/* <Route path="/register" component={AdminPage} />
			<Route path="/forgot_pass" component={AdminPage} />
			<Route path="/confirm_pass" component={AdminPage} /> */}
			
			{/* <Route path="/login" component={Login} /> */}

		</BrowserRouter>
	)
}
