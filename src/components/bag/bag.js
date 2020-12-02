import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import './bag.css'

export default class MyBag extends Component {
	render() {
		return (
			<Row>
				<Col xl={8} lg={8} md={8} sm={12} xs={12}>
					<div className="items-info d-flex justify-content-between p-3 mb-3">
						<div className="check-and-info d-flex">
							<span><input type="checkbox" name="isSelect" id="select-all"/></span>
							<span className="mr-1">Select all items</span>
							<span className="sub-info">(2 items selected)</span>
						</div>
						<span className="items-delete">Delete</span>
					</div>
					<div className="bag-items">

						<div className="bag-item d-flex justify-content-between p-3">
							<div className="check-and-info d-flex">
								<span><input type="checkbox" name="isSelect" /></span>
								<div className="detail-item d-flex ml-1">
									<div className="detail-img ml-2" style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/464a/22c1/4934cf1d9102bfc8ca226895c16fe510?Expires=1607904000&Signature=hjxmkm5vdwrgv5LxRv2gFpN9qIoHk61bYPLf9nQEXcm8h6e~fdOfrjjc28fC70qOLSGe~6JhOElVJpPSqWffK5cyAKRn6wnYiz7zvwp0jVYLB6tkV28TFnQ5m02uSHl85JfEU~PN0QZYkKDujdWDqHJiat9LHlzjAcxwJ2K1-cK9lZBQkjxLUdwWvQqlok~t-QSOjbAtDoQBG53IVZvJtyB4DgWdejLj~jF97RE5iuOVUl0Q5sXADMOAUF-Y-yRPXSNZGVB4yNasQWrnFC5~WWyHLW4WvvKuf7X4GyyqCT3nhKuzPyc386tjBJNc6RHGxIL95onI2Tww5IGFbxNCrQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')" }}></div>
									<div className="detail-info ml-2 d-flex flex-column pt-3">
										<span className="title-info">Men's formal suit - Black</span>
										<span className="brand-info">Zalora Cloth</span>
									</div>
								</div>
							</div>
							<div className="update-num d-flex justify-content-between pt-3">
								<span className="min-btn">-</span>
								<span className="info-num">1</span>
								<span className="plus-btn">+</span>
							</div>
							<div className="item-price">
								<span>$ 20.0</span>
							</div>
						</div>
						<div className="bag-item d-flex justify-content-between p-3">
							<div className="check-and-info d-flex">
								<span><input type="checkbox" name="isSelect" /></span>
								<div className="detail-item d-flex ml-1">
									<div className="detail-img ml-2" style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/464a/22c1/4934cf1d9102bfc8ca226895c16fe510?Expires=1607904000&Signature=hjxmkm5vdwrgv5LxRv2gFpN9qIoHk61bYPLf9nQEXcm8h6e~fdOfrjjc28fC70qOLSGe~6JhOElVJpPSqWffK5cyAKRn6wnYiz7zvwp0jVYLB6tkV28TFnQ5m02uSHl85JfEU~PN0QZYkKDujdWDqHJiat9LHlzjAcxwJ2K1-cK9lZBQkjxLUdwWvQqlok~t-QSOjbAtDoQBG53IVZvJtyB4DgWdejLj~jF97RE5iuOVUl0Q5sXADMOAUF-Y-yRPXSNZGVB4yNasQWrnFC5~WWyHLW4WvvKuf7X4GyyqCT3nhKuzPyc386tjBJNc6RHGxIL95onI2Tww5IGFbxNCrQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')" }}></div>
									<div className="detail-info ml-2 d-flex flex-column pt-3">
										<span className="title-info">Men's formal suit - Black</span>
										<span className="brand-info">Zalora Cloth</span>
									</div>
								</div>
							</div>
							<div className="update-num d-flex justify-content-between pt-3">
								<span className="min-btn">-</span>
								<span className="info-num">1</span>
								<span className="plus-btn">+</span>
							</div>
							<div className="item-price">
								<span>$ 20.0</span>
							</div>
						</div>

					</div>
				</Col>
				<Col xl={4} lg={4} md={4} sm={12} xs={12}>
					<div className="shopping-summary p-4">
						<span className="summary-title">Shopping summary</span>
						<div className="price-info d-flex justify-content-between mt-4 mb-3">
							<p className="text-price">Total Price</p>
							<p className="price-count">$ 40.0</p>
						</div>
						<div className="btn-buy" onClick={() => {
							this.props.history.push({
								pathname: '/checkout'
							})
						}}>
							<span>Buy</span>
						</div>
					</div>
				</Col>
			</Row>
		)
	}
}
