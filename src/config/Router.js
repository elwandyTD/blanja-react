import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Login from '../pages/auth/Login'
import Home from '../pages/Home'
import Products from '../pages/Products'
import DetailProduct from '../pages/DetailProduct'
import MyBag from '../pages/MyBag'
import Checkout from '../pages/Checkout'
import AdminPage from '../pages/AdminPage'
import Register from '../pages/auth/Register'
import Forgot from '../pages/auth/ForgotPass'
import Confirm from '../pages/auth/ConfirmPass'
import Profile from '../pages/MyProfile'
import Store from '../pages/store/Store'
import SellProduct from '../pages/store/SellProduct'

import store from '../redux/store'

export default function Router() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Route exact path="/" component={Home} />
				<Route path="/product" component={Products} />
				<Route exact path="/products/:id" component={DetailProduct} />
				<Route path="/bag" component={MyBag} />
				<Route path="/checkout" component={Checkout} />
				<Route path="/post" component={AdminPage} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/forgot" component={Forgot} />
				<Route path="/confirm" component={Confirm} />
				<Route path="/profile" component={Profile} />
				<Route path="/store" component={Store} />
				<Route path="/sell" component={SellProduct} />
			</BrowserRouter>
		</Provider>
	)
}
