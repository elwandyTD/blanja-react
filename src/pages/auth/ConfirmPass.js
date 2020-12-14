import React, { Component } from 'react'
import ConfirmComponent from '../../components/auth/confirm-pass'

export default class ConfirmPass extends Component {
	render() {
		return <ConfirmComponent history={this.props.history} />
	}
}
