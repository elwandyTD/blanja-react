import React from 'react'
import { Link } from 'react-router-dom'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

import './products.css'

export default function Products({ title, subtitle, products }) {
	return (
		<section className="mt-3">
				<span className="cs-title">{title}</span>
				<p className="cs-subtitle">{subtitle}</p>
				<div className="card-products">
					
				{products && products.map((product, index) => {
					return (
						<Link to={{ pathname: '/product/' + product.product_id, state: { products: products, id: product.product_id } }}  key={index}>
							<div className="cs-card" >
								<img src={product.product_images[0].product_attr_value} alt="" className="cs-head-card" />
								<div className="cs-card-body">
								<p className="cs-card-title">{product.product_title}</p>
								<p className="cs-price">IDR {new Intl.NumberFormat().format(product.product_price)}</p>
									<p className="cs-brand">{product.brand_name}</p>
									<span>
										<Rater total={5} rating={2} interactive={false} />
										<span className="cs-star-review ml-1">(10)</span>
									</span>
								</div>
							</div>
						</Link>
					)
				})}

				{ (products ? products.length === 0 ? <h1>Data kosong</h1> : <h1>Data ada</h1> : <h1>Data tidak ada</h1>) }

			</div>
		</section>
	)
}
