import React, { Component } from 'react'
import ForgotComponent from '../../components/auth/forgot-pass'

export default class ForgotPass extends Component {
	render() {
		return <ForgotComponent history={this.props.history} />
	}
}
