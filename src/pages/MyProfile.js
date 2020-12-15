import React, { Component } from 'react'
import Profile from '../components/profile/profile'
import Navbar from '../components/navbar/navbar'

export default class MyProfile extends Component {
	render() {
		return (
			<>
				<Navbar />
				<Profile />
			</>
		)
	}
}
