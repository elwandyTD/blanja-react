import React, { Component } from 'react'
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
	constructor(props) {
		super(props)

		this.state = {
			categories: [
				{
					title: "T-Shirt",
					color: "#CC0B04",
					img: "https://s3-alpha-sig.figma.com/img/6b1b/11de/b984818831143e1889054e98377f4423?Expires=1607904000&Signature=VhgWnXbYc98-JCDEuE1a41stQZNV22Ai6b5oSc6penxiWiFg1sbbKZWh7HJtV~jORDefcqP8gCMRxIJ6hLMUMn-S6Pn3z6WYEnlsw8CFo79BDcdv~pOufo-aKvOAqOUXN1jv6T7EYX-gzWytL0-AbOv~EYwzecqaEmcJW83r9HmbjYCcjReYd3WfRAlSaF5rD-pU3Vm3ys~k~dYZhh8fT8lR8Cy4nUcri7Qd-SxfZVzRbhAM-3bPSxktmQmKktZ2NCCzSzWx68dU6Mzs-Wb-8IUFuEDT84tCBZKIa-N6O9n6kO~s6-w3PptUSA-v1kS0wP528HF9H8~dXLWmgbXVgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
				},
				{
					title: "Shorts",
					color: "#1C3391",
					img: "https://s3-alpha-sig.figma.com/img/49a2/88f8/ad6aeec8a073aa0a657e7c7519263626?Expires=1607904000&Signature=Ktz-UMalSSlYyblQbMNCVOFNJI3FfzxSZwNBvpgsP5shD4gxs~bHmAi-vMS9FewuTe~ABVhdlYq1cmi93F2Fh~pIOiAfr4ZQdOcKGDs-hvACxVnWVWyZL~MQ7yNake~iOPKY~-5BvQoqsyd4SOnnlGQs-~p9wJ4B~WaUPrCSjKWyBuNojJK5J2z9ueDjb7zSzJ27VBREsjCWM0~g8cb0woeMl4P0raVm91TBtevFszGR1z87i~PGz35CzEdUR2yyggcIPq-8MNXZweho7uT8zLouN~f0GcVjBMMVrvxIV8PH8IiS4MPuyGaSv9WJK542vRwBEjdHy2bUM~k~XG9QTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
				},
				{
					title: "Jacket",
					color: "#F67B02",
					img: "https://s3-alpha-sig.figma.com/img/65af/55c4/5d103020c208199aa0396789ad645df1?Expires=1607904000&Signature=Lmc5789rqrQN5z-vOh~8222F0hdNkf3aNJblDK9X6kLiZ7nhDniARnAaOiNKBVNppoH8xEl63DDi1cGiQHCbHTLPdCTAAdkos-S0jh~LxdtjrJGxqST-fBAWy56rQNdRWOYkZyaNFcje4Il63ghG2s7AP70s1XSmQ~8DDmkJol7yR6TB4Ry9VlbRPHv1Mi2Gilkr4Sh0XSzxUzo~Z35GqPuInMwPKxI~yMszBiSNkqJtg2ubV0W3YOYEsxlYbFMnsKSRT5aemB6ygyTow846-jKHW7mPmh5J4iwR7nmUF-Smk6MOs5LNHCIzcrK9OoSPJKXoqGmIPBQIbBJ04wZXVw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
				},
				{
					title: "Pants",
					color: "#F31F51",
					img: "https://s3-alpha-sig.figma.com/img/64b4/4714/896286200d422369861a2d608f35b6f4?Expires=1607904000&Signature=S5h7~WKYkNBs7qiyrRWGtlHSMrQhXv6HM2LXPUlLGOIMKDKqjht~LCOBudrebUbGn1I7q~Bufot1~R9SncYAu5ApD5GdkQ6NxorpwSFG9y426E4NbnwnD3cfLceyKsUgXSKoFhxF50nCF6CJLqcPd-uVwLUw2L99HIkc-Y65HLzk6mWrGfv60t4q3bCcNiiFiLjrvIDOuPHjPEJE9tIJVZaUblUSYcau0iSjD-i5PExBt1WvB1Oh7Qq04466wOMfisLdcCkWoPPK0M4~0RhcVx2o0AtPmknWb0DuJsBun-7r9eK2xthWsVmmSWE4hJIk~GUPG2If8Q7Ho6ECTm1zUg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
				},
				{
					title: "Shoes",
					color: "#57CD9E",
					img: "https://s3-alpha-sig.figma.com/img/fc9b/6b9b/45aad43ae695c2de7b3949ff451bd7a1?Expires=1607904000&Signature=AU~0FfPSuIp~gtH7Fi9oNAP~7YbM32SAs~aeNiYIcOS7xC9xwZeC6iC0YeVfYkCfqlfYXAmiUjYUmlbU00BIjHwRM9S9WwNqKPK4BKCMU3tr-JzHKq1KqR~k0eAAeZjt52CogXm4ySfSanM5bzoEB5RXbGWb0kaEBLViRw82vtif45UzeA3OVskayQtME6m6-T1AYhNyyeG1eOyMifwvwJwu5SGSKfbyKTLqjdfjuykg-QBo18pQTiWci9stpfNe3isi7toOEVMsaWv4KUFwpmOc7CMVdq-DTaifFe8Dla3XF1pPNfX~yEUa22t0XtzTYAF2AozF7h1gM2zDPDoTsQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
				},
				{
					title: "High heels",
					color: "#5650D8",
					img: "https://s3-alpha-sig.figma.com/img/e4ba/3e76/a9bf0f820f0f0a5c5b5c7383b26d989c?Expires=1607904000&Signature=HjMCzoiqUe9xP9FW6aMa7tWWV7APbCXDDXEO7P2vxLHANkwT9IJ8UxR5tRJHrbITbdylwBXyNioS2aMze~rSfOClWe5VhFl32VE03kc1rei7bh19EEXQS4a10Q-VaFNckVEzRMA8T3QrjZrpA0rNvJo-~WxNOmnwVWdMt7KJl9GBH9LNhYaqHxvxx3LRvI1neLnZ~e9gDtENglWVELAg1q19gFXYtP705RBM5MtekIConvrnzQhjB8oUeTNCVNjUKloXOoyUFag2H5myDT3oFPodgPceeuqfv0i2MnUN5DtuiILfJ5GsKDMoll2XWuQJStzwYSzQZ2ciZY9~6MBtxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
				},
				{
					title: "Handbag",
					color: "#50C8D8",
					img: "https://s3-alpha-sig.figma.com/img/d554/5e85/c5a03743f4f3d8d7227b7cd1854213ac?Expires=1607904000&Signature=J2jKPwG6eczD~3KZ8wTuaeFH1HDRy99~lAFU1Jxoiv-DJV8MTGxsG98l3ZmP67trf1REUxsDiRci0iRiUWdNxLXGnFHcvbLklhhI2ScodeZgVgFRiDFlWsqGuyJWQmHqE6zzKEHCf39V4qADnVV266zjNXmwfXz64kbFqu3BxKL90TpHc-4ltOSzp5m9lhvLMCNa-MrMQ3Ift9FodLnqCq07z9GAp1AcjUITaL9DYY7RUp9JptJLqXnCbFlZwPjv4qngIN1H0QwjrP7sKBhM9lvMByRLX0iNnDpRadhlcQpPIhu0g8HQv9DOKSrD6WM~RO7LXiTKpoJ2aA7fpOTPAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
				},
			]
		}
	}

	render() {
		const settings = {
      dots: false,
			infinite: true,
      speed: 500,
			slidesToShow: 5,
			swipe: false,
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
					{this.state.categories.map((category, index) => {
						return (
							<div key={index}>
								<div className="cs-category-item" style={{ backgroundColor: category.color, backgroundImage: `url('${category.img}')` }}>
								<span>{category.title}</span>
								</div>
							</div>
						)
					})}
        </Slider>
			</section>
		)
	}
}
