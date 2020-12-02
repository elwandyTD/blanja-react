import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import './checkout.css'

export default class MyCheckout extends Component {
	render() {
		return (
			<Row>
				<Col xl={8} lg={8} md={8} sm={12} xs={12}>
					<span className="summary-title">Shipping address</span>
					<div className="address-info p-4 mt-3">
						<span className="summary-title">Andreas Jane</span>
						<p className="mt-3">Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
						<div className="btn-address">
							<span>Choose another address</span>
						</div>
					</div>
					<div className="bag-items">

						<div className="bag-item d-flex justify-content-between p-4 mt-4">
							<div className="check-and-info d-flex">
								<div className="detail-item d-flex ml-1">
									<div className="detail-img ml-2" style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/464a/22c1/4934cf1d9102bfc8ca226895c16fe510?Expires=1607904000&Signature=hjxmkm5vdwrgv5LxRv2gFpN9qIoHk61bYPLf9nQEXcm8h6e~fdOfrjjc28fC70qOLSGe~6JhOElVJpPSqWffK5cyAKRn6wnYiz7zvwp0jVYLB6tkV28TFnQ5m02uSHl85JfEU~PN0QZYkKDujdWDqHJiat9LHlzjAcxwJ2K1-cK9lZBQkjxLUdwWvQqlok~t-QSOjbAtDoQBG53IVZvJtyB4DgWdejLj~jF97RE5iuOVUl0Q5sXADMOAUF-Y-yRPXSNZGVB4yNasQWrnFC5~WWyHLW4WvvKuf7X4GyyqCT3nhKuzPyc386tjBJNc6RHGxIL95onI2Tww5IGFbxNCrQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')" }}></div>
									<div className="detail-info ml-2 d-flex flex-column pt-3">
										<span className="title-info">Men's formal suit - Black</span>
										<span className="brand-info">Zalora Cloth</span>
									</div>
								</div>
							</div>
							<div className="item-price">
								<span>$ 20.0</span>
							</div>
						</div>
						<div className="bag-item d-flex justify-content-between p-4 mt-4">
							<div className="check-and-info d-flex">
								<div className="detail-item d-flex ml-1">
									<div className="detail-img ml-2" style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/464a/22c1/4934cf1d9102bfc8ca226895c16fe510?Expires=1607904000&Signature=hjxmkm5vdwrgv5LxRv2gFpN9qIoHk61bYPLf9nQEXcm8h6e~fdOfrjjc28fC70qOLSGe~6JhOElVJpPSqWffK5cyAKRn6wnYiz7zvwp0jVYLB6tkV28TFnQ5m02uSHl85JfEU~PN0QZYkKDujdWDqHJiat9LHlzjAcxwJ2K1-cK9lZBQkjxLUdwWvQqlok~t-QSOjbAtDoQBG53IVZvJtyB4DgWdejLj~jF97RE5iuOVUl0Q5sXADMOAUF-Y-yRPXSNZGVB4yNasQWrnFC5~WWyHLW4WvvKuf7X4GyyqCT3nhKuzPyc386tjBJNc6RHGxIL95onI2Tww5IGFbxNCrQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')" }}></div>
									<div className="detail-info ml-2 d-flex flex-column pt-3">
										<span className="title-info">Men's formal suit - Black</span>
										<span className="brand-info">Zalora Cloth</span>
									</div>
								</div>
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
						<div className="price-info d-flex justify-content-between mt-4">
							<p className="text-price">Order</p>
							<p className="price-count">$ 40.0</p>
						</div>
						<div className="price-info d-flex justify-content-between" style={{ marginTop: "-10px" }}>
							<p className="text-price">Delivery</p>
							<p className="price-count">$ 5.0</p>
						</div>
						<hr  style={{ marginTop: "-10px" }}/>
						<div className="price-info d-flex justify-content-between mt-1">
							<span className="summary-title">Shopping summary</span>
							<p className="price-count" style={{ color: "#DB3022" }}>$ 45.0</p>
						</div>
						<div className="btn-buy">
							<span>Select Payment</span>
						</div>
					</div>
				</Col>
			</Row>
		)
	}
}
