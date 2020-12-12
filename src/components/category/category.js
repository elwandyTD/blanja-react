import React, { Component } from 'react'
import axios from 'axios'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'

import './category.css'
import LeftArrow from '../../assets/icons/arrow-left.png'
import RightArrow from '../../assets/icons/arrow-right.png'

function CustomArrow(props) {
	const { className, onClick, srcImage } = props
	return (
		<div className={className} onClick={onClick}>
			<img src={srcImage} alt="Arrow"/>
		</div>
	)
}

export default class Category extends Component {
	state = {
		categories: []
	}

	getAllCategory = () => {
		const url = "http://localhost:8000/category"

		axios
		.get(url)
		.then(({ data }) => {
			this.setState({
				categories: data
			})
		})
		.catch((e) => {
			console.log(e)
		})
	}

	componentDidMount = () => {
		this.getAllCategory()
	}

	render() {
		const settings = {
      dots: false,
			infinite: true,
      speed: 500,
			slidesToShow: 5,
			nextArrow: <CustomArrow srcImage={RightArrow} className="cs-arrow" />,
			prevArrow: <CustomArrow srcImage={LeftArrow} className="cs-arrow" />,
			responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
          }
        },
      ]
		}
		return (
			<section className="category-section">
				<span className="cs-title">Category</span>
				<p className="cs-subtitle">What are you currently looking for</p>
				<Slider {...settings}>
					{this.state.categories.data && this.state.categories.data.map((category, index) => {
						return (
							<div key={index}>
								<div className="cs-category-item" style={{ backgroundColor: category.category_color, backgroundImage: `url('${category.category_image}')` }}>
								<span>{category.category_name}</span>
								</div>
							</div>
						)
					})}
				</Slider>
			</section>
		)
	}
}
