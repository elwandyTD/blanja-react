import React, { Component } from 'react'

import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/sidebar/sidebar'
import Sell from '../../components/store/sell'

export default class SellProduct extends Component {
	render() {
		return (
			<>
				<Navbar history={this.props.history} />
				<Sidebar />
				<div className="cs-content-section">
					<Sell history={this.props.history} />
				</div>
			</>
		)
	}
}
