import React, { Component } from 'react'
import RegisterComp from '../../components/auth/register'
import { connect } from 'react-redux'
import { registerUser } from '../../redux/actionCreators/Auth'

class Register extends Component {
	state = {
		error: ''
	}

	submitForm = async (data, type) => {
		let validator = []
		if (type === 'customer') {
			const { user_name, user_email, user_password } = data
			validator = [user_name, user_email, user_password]
		} else if (type === 'seller') {
			const { user_name, user_email, user_password, user_phone, user_store } = data
			validator = [user_name, user_email, user_password, user_phone, user_store]
		} else {
			this.setState({
				error: 'Error tidak diketahui, silahkan hubungi admin'
			})
		}

		if (validator.includes('')) {
			this.setState({
				error: 'Silahkan isi semua data'
			})
		} else {
			await this.props.dispatch(registerUser(data, type))

			const { auth } = this.props

			if ( auth.data.status ) {
				this.setState({
					error: ''
				})
				
				this.props.history.push({
					pathname: '/login'
				})
			} else {
				this.setState({
					error: auth.data.error
				})
			}
		}
	}

	render() {
		return <RegisterComp error={this.state.error} submitForm={this.submitForm} />
	}
}

const mapsStateToProps = ({ auth }) => {
	return {
		auth
	}
}

export default connect(mapsStateToProps)(Register)