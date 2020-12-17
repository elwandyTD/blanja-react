import React, { Component } from 'react'
import Profile from '../components/profile/profile'
import Navbar from '../components/navbar/navbar'
import Sidebar from '../components/sidebar/sidebar'

export default class MyProfile extends Component {
	render() {
		return (
			<>
				<Navbar />
				<Sidebar />
				<Profile />
			</>
		)
	}
}
