import React, { Component } from 'react'

import Navbar from '../../components/navbar/navbar'
import Sidebar from '../../components/sidebar/sidebar'
import Sell from '../../components/store/sell'

export default class SellProduct extends Component {
	render() {
		return (
			<>
				<Navbar />
				<Sidebar />
				<div className="cs-content-section">
					<Sell history={this.props.history} />
				</div>
			</>
		)
	}
}
