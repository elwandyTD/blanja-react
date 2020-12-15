import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './profile.css'

const Profile = () => {
	return (
		<>
			<div className="cs-sidebar">
				<div className="cs-mainbar">
						<div className="cs-sidebar-items">
							<div className="cs-profile-item">
							</div>
						</div>
				</div>	
			</div>
			<div className="cs-card-detail">
				<Container>
					<Row className="cs-card-header">
						<Col>
							<span className="card-detail-title">My Profile</span>
							<br/>
							<span className="card-detail-subtitle">Manage your profile information</span>
						</Col>
					</Row>
					<hr/>
					<Row className="cs-card-body">
						<Col xl={8} lg={8} md={8} sm={8} xs={8} className="detail-side">
							<div className="cs-input-group">
								<div className="cs-input-label d-inline-block">Name</div>
								<div className="cs-input-form d-inline-block">
									<input type="text" placeholder="your name"/>
								</div>
							</div>
							
							<div className="cs-input-group">
								<div className="cs-input-label d-inline-block">Email</div>
								<div className="cs-input-form d-inline-block">
									<input type="text" placeholder="example@gmail.com"/>
								</div>
							</div>
							
							<div className="cs-input-group">
								<div className="cs-input-label d-inline-block">Phone number</div>
								<div className="cs-input-form d-inline-block">
									<input type="text" placeholder="your phone"/>
								</div>
							</div>
							
							<div className="cs-input-group">
								<div className="cs-input-label d-inline-block">Gender</div>
								<div className="cs-input-form d-inline-block">
									<div className="cs-input-radio d-inline-block">
										<input type="radio" name="gender" id=""/> 
										<span>Laki-laki</span>
									</div>
									<div className="cs-input-radio d-inline-block">
										<input type="radio" name="gender" id=""/> 
										<span>Perempuan</span>
									</div>
								</div>
							</div>
							
							<div className="cs-input-group">
								<div className="cs-input-label d-inline-block">Date of birth</div>
								<div className="cs-input-form d-inline-block">
									<select name="tanggal" className="cs-input-select" id="">
										<option value="">1</option>
										<option value="">2</option>
										<option value="">3</option>
									</select>
									<select name="tanggal" className="cs-input-select" id="">
										<option value="">January</option>
										<option value="">2</option>
										<option value="">3</option>
									</select>
									<select name="tanggal" className="cs-input-select" id="">
										<option value="">1990</option>
										<option value="">2</option>
										<option value="">3</option>
									</select>
								</div>
							</div>

							<div className="cs-input-group">
								<div className="cs-input-label d-inline-block"></div>
								<div className="cs-input-form d-inline-block">
									<button className="cs-card-save">
										Save
									</button>
								</div>
							</div>
							
						</Col>
						<Col xl={4} lg={4} md={8} sm={8} xs={8} className="image-side text-center">
							<img src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png" className="" width="110" alt="Profile"/>
							<br/>
							<button className="image-side-btn">Select image</button>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}

export default Profile
