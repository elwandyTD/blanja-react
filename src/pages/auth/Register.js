import React, { Component } from 'react'
import RegisterComp from '../../components/auth/register'

export default class Register extends Component {
	render() {
		return <RegisterComp history={this.props.history} />
	}
}
