import React, { Component } from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'

import './banner.css'
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

export default class Banner extends Component {
	constructor(props) {
		super(props)

		this.state = {
			banners: [
				{
					title: "Black Edition",
					img: "https://s3-alpha-sig.figma.com/img/4ede/f1d2/17c6ec2b69ee48e5f11b32d611a89f67?Expires=1609113600&Signature=V91y5BI1RWp9tZsH6ice8wv76n5EV1EbtJG2bR6Qrl5uV9eSGBDKbZJkUNyc-Eh0f6xoLoPQG1aB9dqqSm9Lxk40QWgaUPm9t3mJXk2XfBGH9Mw5jBDs4GuvtJvRDq1Bxy7pVMVxQ3YQrYG2PftHXTgUdHtNlGgFJ0MZih6MqR~0MiDryLObrsqwI9lG7pG38Hh6aeZtAUq-mZXDkIjRykgDuC8Ws-QNWtK2hvRI4huPvTU73P5FPzWRW-hUxCZPp3tvJuLwQjddUBLf52q3sNQj1Ubm9IYv3CABMrWE53SZbXnWpUkNN5aYNpXG5CdHZ9rlLKxve8LALqjcLmRvcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
				},
				{
					title: "Wedding Suit",
					img: "https://s3-alpha-sig.figma.com/img/1b5e/b306/6bf75d4aa29a63c8e2a82fb8e2e71448?Expires=1609113600&Signature=X4jroRxyQeTJM-Rk1MAWENx9I-0nr943NLVuR34-BdGwPHLDS0JZYVbkw4QrE4Gh215QDqWWdmx-36nnpy2fsxry~PQy6fLgEB99Ov1IUfOz3IYX2Sl7qoU2MgDY7-Z~o71Br0OVchDdRdqU6nPxt78KwLamH02xeKRp0~bQHidQBNw2NHtBjb2SSGvm02vza5FyJ8ndwddr9cfi0uL1G70dKZSBI~ZMjR7pogPIAwA~7rK1ZTj6Jv6jqTKjVpNO1pc76R44klt7juG2qZmGqifWtM4YNitXfTgoCQeB3f6f31cnHPyRGn4EIjmBFvQo4BEPlXxjvIAOCYrX4JBLOg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
				},
				{
					title: "Best Casuals",
					img: "https://s3-alpha-sig.figma.com/img/7460/b3fe/aeb7ba1b98b125438ae2783f72d2cd28?Expires=1609113600&Signature=ByF-JPyP7qDpZ1asY2TnD47K75G4XPhr~nTwJRKZFTxyedbgpKkyDqjOKwI5XRJIlVCjwjlxB1R2BZ8iYNx14XyMATA9VogZOlGvSyEKfK5izeAPgV4ITvmqEw1t5YBEA9IXmstXdiDms~Gw9DN5CQmHFZJR3NRIP49K1x-WTmBmsiJJ2kMNYkujy-~OG1UeYP8ONICjOyXBDHdIuVVQtwITPcyce2CoMcJBGMiBA~-htkXz5-a1lS8mLXLhcafZ-qrK0ovP9JREwul9xpCd7BQJZ1Oc3bqR4iWZh3B5Fh25lUD4Hif3p6bamF81P1cDbxtFihwNAuITRno5iIqkaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
				},
				{
					title: "Trends in 2020",
					img: "https://s3-alpha-sig.figma.com/img/dfda/9423/a2b9a2264fde7ca54e9e48fe9abac812?Expires=1609113600&Signature=CxzO~djwmmfbJ7Z-Ncz8eoROC4lwrLs8n8F8aF1sBU~Cixl94uBHxtIIwNdxxrj0Uuj6i~4ISVozs41HdzBMDLMxXrkSBH2Frdk7iVSwm725chn4jjX3ZacJZpSaiXgWGjXvAVZkwR44nWb21bUCtquSQpPaGqJPR9clnAeVXex~fEeQ-sxhJqOFO-b0LHrrKYvFI31R0lMUXmjvmj~W9ctG5Fh3-ikZb8NiGWlUwO~V9u3Ovi9SyD-e363lrhF8eWPxk~B~4pTzcY06xVFnPfU5xafnZ988~Hd62iSRaQ81j7MKzRuH70O41aNrqYxZVpu2jkhjflYSF6cXe3E8xg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
				},
			]
		}
	}

	render() {
    const settings = {
      dots: true,
			infinite: true,
			centerMode: true,
      speed: 500,
			slidesToShow: 2,
			nextArrow: <CustomArrow srcImage={RightArrow} className="cs-arrow" />,
			prevArrow: <CustomArrow srcImage={LeftArrow} className="cs-arrow" />,
			responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
						centerMode: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
						centerMode: false,
          }
        },
      ]
		}

    return (
      <section className="mb-5">
        <Slider {...settings}>
					{this.state.banners.map((banner, index) => {
						return (
							<div key={index}>
								<div className="cs-carousel-item" style={{ backgroundImage: `url("${ banner.img }")` }}>
							<span>{ banner.title }</span>
								</div>
							</div>
						)
					})}
        </Slider>
      </section>
    )
  }
}
