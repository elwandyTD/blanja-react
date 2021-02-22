import React, { Component } from 'react'

import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/sidebar/sidebar'
import MyStore from '../../components/store/store'

export default class Store extends Component {
	render() {
		return (
			<>
				<Navbar history={this.props.history} />
				<Sidebar />
				<div className="cs-content-section">
					<MyStore />
				</div>
			</>
		)
	}
}
