import React, { Component } from 'react'
import LoginComp from '../../components/auth/login'
import { connect } from 'react-redux'
import { loginUser } from '../../redux/actionCreators/Auth'

class Login extends Component {

	submitForm = async (data, type) => {
		await this.props.dispatch(loginUser(data, type))
		const { auth } = this.props

		if ( auth.data.data ) {
			localStorage.setItem('token', 'Bearer ' + auth.data.data.token)

			this.props.history.push({
				pathname: '/'
			})
		} else {
			console.log(auth.data.err)
		}
	}

	render() {
		return <LoginComp history={this.props.history} submitForm={this.submitForm} />
	}
}

const mapsStateToProps = ({ auth }) => {
	return {
		auth,
	}
}

export default connect(mapsStateToProps)(Login)