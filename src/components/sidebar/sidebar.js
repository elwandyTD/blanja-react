import React from 'react'
import { Link } from 'react-router-dom'

import ProfileIcon from '../../assets/icons/profile.png'

import './sidebar.css'

export default function sidebar() {
	return (
		<div className="cs-sidebar">
				<div className="cs-mainbar float-right">
						<div className="cs-profile-item d-flex">
							<img src={ProfileIcon} className="cs-profile-image" height="60px" width="60px" alt="" />
							<div className="cs-profile-info-name">
								<p className="cs-user-name">Johanes Mikael</p>
								<p><Link to={{ pathname: '/profile' }} className="btn-profile-edit">Edit profile</Link></p>
							</div>
						</div>
						<div className="cs-sidebar-items">
							<div className="cs-sidebar-item">
								<p className="cs-sidebar-item-title">My Account</p>
								<div className="cs-sidebar-dropdown">
									<Link to={{ pathname: '/profile' }}>
										<p className="sidebar-dropdown-item">Profile</p>
									</Link>
								</div>
							</div>
							<div className="cs-sidebar-item">
								<p className="cs-sidebar-item-title">Product</p>
								<div className="cs-sidebar-dropdown">
									<Link to={{ pathname: '/store' }}>
										<p className="sidebar-dropdown-item">My products</p>
									</Link>
									<Link to={{ pathname: '/sell' }}>
										<p className="sidebar-dropdown-item">Selling products</p>
									</Link>
								</div>
							</div>
							<div className="cs-sidebar-item">
								<p className="cs-sidebar-item-title">Order</p>
								<div className="cs-sidebar-dropdown">
									<p className="sidebar-dropdown-item">My order</p>
									<p className="sidebar-dropdown-item">Order cancel</p>
								</div>
							</div>
						</div>
				</div>	
			</div>
	)
}
