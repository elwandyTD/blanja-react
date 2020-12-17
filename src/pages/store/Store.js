import React, { Component } from 'react'

import Navbar from '../../components/navbar/navbar'
import Sidebar from '../../components/sidebar/sidebar'
import MyStore from '../../components/store/store'

export default class Store extends Component {
	render() {
		return (
			<>
				<Navbar />
				<Sidebar />
				<div className="cs-content-section">
					<MyStore />
				</div>
			</>
		)
	}
}
