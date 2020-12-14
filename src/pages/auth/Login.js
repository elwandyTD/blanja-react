import React, { Component } from 'react'
import LoginComp from '../../components/auth/login'

export default class Login extends Component {
	render() {
		return <LoginComp history={this.props.history} />
	}
}
