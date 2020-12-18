import React, { Component } from 'react'
import LoginComp from '../../components/auth/login'
import { connect } from 'react-redux'
import { loginUser } from '../../redux/actionCreators/Auth'
import { isLogin } from '../../helpers/auth'

class Login extends Component {
	state = {
		error: ''
	}

	submitForm = async (data, type) => {
		const { user_email, user_password } = data
		
		if (user_email === '' && user_password === '') {
			this.setState({
				error: 'Silahkan isi email dan password'
			})
		} else if (user_email === '') {
			this.setState({
				error: 'Silahkan isi email'
			})
		} else if (user_password === '') {
			this.setState({
				error: 'Silahkan isi password'
			})
		} else {
			await this.props.dispatch(loginUser(data, type))

			const { auth } = this.props

			if ( auth.data.data ) {
				this.setState({
					error: ''
				})

				localStorage.setItem('user', JSON.stringify(auth.data.data))
	
				this.props.history.push({
					pathname: '/'
				})
			} else {
				this.setState({
					error: auth.data.err
				})
			}
		}
	}
	componentDidMount = () => {
		isLogin(this.props.auth, this.props.history)
	}

	render() {
		return <LoginComp submitForm={this.submitForm} error={this.state.error} />
	}
}

const mapsStateToProps = ({ auth }) => {
	return {
		auth,
	}
}

export default connect(mapsStateToProps)(Login)