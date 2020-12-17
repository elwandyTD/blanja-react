import React, { Component } from 'react'
import LoginComp from '../../components/auth/login'
import { connect } from 'react-redux'
import { loginUser } from '../../redux/actionCreators/Auth'
import { isLogin } from '../../helpers/auth'

class Login extends Component {
	submitForm = async (data, type) => {
		await this.props.dispatch(loginUser(data, type))
		const { auth } = this.props

		if ( auth.data.data ) {
			localStorage.setItem('token', auth.data.data.token)

			this.props.history.push({
				pathname: '/'
			})
		} else {
			console.log(auth.data.err)
		}
	}
	componentDidMount = () => {
		isLogin(this.props.auth, this.props.history)
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