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
					img: "https://s3-alpha-sig.figma.com/img/4ede/f1d2/17c6ec2b69ee48e5f11b32d611a89f67?Expires=1610323200&Signature=Y8EApWN-1bA8Qi4PLXVNNix4bT6kim0emqKJlvjO~BEzQ6h-IGQjME9WWyOVCIMYMnU3he7biFroveG7-HaVjVoorAZYdItbVI0cwugCP5G~3xFbKh0mjTG8nlfHvAiPjLMJca065C0~aIWxi5APkWiqdyL3r07AW7mvdGmEQIznVNpLv6cuKCaGNjA6eZwHw1AGUFHJC3B1nJ0Nya47AN1Nc3P3p9Yb1v~B5WHvQeFNxerVwK~wY-x70fIyafiAWp6vrS2uT~zq3pDxYwtf8KiFvd4EZqXNZHRr-eeNb~AYR8EKTx5hMRE9MvV05HeXoiFPVj30ICZ16mSfJWybKg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
				},
				{
					title: "Wedding Suit",
					img: "https://s3-alpha-sig.figma.com/img/1b5e/b306/6bf75d4aa29a63c8e2a82fb8e2e71448?Expires=1610323200&Signature=Solj3Z8MbRTomNRFtfhHPZDLhbDXqQomCZpZOTickzMk6BfcM3Y7NTY2m2aSNqVZgosjXOkzWgADxJy5-1n81J1omS3kwmhNKMmjw5FSWD9NIYm1ZhjfFWLBnf-xJpmXFHI7-Y96pu17hjYc1jRbl3yXNaW2MG1pWyg6TjDJvZD~V4GCQIh-Duu5Wqv2GAtef6R2uRJExWzJjuwVYoXw0NLFw7ow5e9NBfK~kf5nTqhbT04z0zUAuVI5IwpJoOihaHl4A3gnKrdsII4E3NBJhrlYEgqKlxkN-FNoOCbCpqHERUzSPtNoaPshy2XHUlErMgvqMnpcPKFO8p7sboo1Cg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
				},
				{
					title: "Best Casuals",
					img: "https://s3-alpha-sig.figma.com/img/7460/b3fe/aeb7ba1b98b125438ae2783f72d2cd28?Expires=1610323200&Signature=Nhyd1olHT8udvWe8Pi~vZgEd-qJIXEmgQnpu907nodhl69T~8ok-BMReuwJ7Jfg48NvLY5kxOqTpNAEIo5EhWQiRNspmvPYH4nxGVXov-YVgUV-SYhQ8kexPx9L86YoP~9yp2l8wCh2T8nNKFlmtNiFjNpDb10NfMbCbQvUhuwu63QpLxSFswlSa3RR2RLy1SCmYZurfmGzlpdkrd1t1oBamNDqetoad0-U8YwENm5lfuLgYoTMHoUT8pcdiBhCjQuHlRB3aZDOTb5t4E9TufeEm~sZGv0F-3zNd2L0OpLWr39dx1UzU3DbI02c4o9aDTVmPlCAtShJbcLB9z6wG5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
				},
				{
					title: "Trends in 2020",
					img: "https://s3-alpha-sig.figma.com/img/dfda/9423/a2b9a2264fde7ca54e9e48fe9abac812?Expires=1610323200&Signature=G5idoTzc3JQ6cDePW01hMHozYfe2mC~GCkXaSoudHARCyt9Zm2cuxydAshug42rnUsZq32aYElQ9R7Lcrl-TOWlU20WYa0KvpMWkaLg-hjHEN9bN28hxNbupLGUBi6aG~YiPBuVoOv-t6rwm0HpBmRNweI0UFtbvOSpmH2RMcp4xgwljexuC0ny6gAJo6DMW9xspI4ty8Kj6J9A5SfjMA5G4YEhhHGQWo01DL3nhRJCohVESQ7DspsdFTMbkCJrTsNMt7Fuuj7kk0UnIa7vwQrifeqIhXiFAuOGWrpyhmE4xqdJJvwocyYHxJxTBG3IXs1eyKjkivUr8L5aCIk1y2w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
        <Slider {...settings} className="cs-banner-section">
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
