import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./banner.css";
import LeftArrow from "../../assets/icons/arrow-left.png";
import RightArrow from "../../assets/icons/arrow-right.png";
import Banner1 from "../../assets/images/banner/banner-1.jpg";
import Banner2 from "../../assets/images/banner/banner-2.jpg";
import Banner3 from "../../assets/images/banner/banner-3.jpg";
import Banner4 from "../../assets/images/banner/banner-4.jpg";

function CustomArrow(props) {
  const { className, onClick, srcImage } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={srcImage} alt="Arrow" />
    </div>
  );
}

export default class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      banners: [
        {
          title: "Black Edition",
          img: Banner1,
        },
        {
          title: "Wedding Suit",
          img: Banner2,
        },
        {
          title: "Best Casuals",
          img: Banner3,
        },
        {
          title: "Trends in 2020",
          img: Banner4,
        },
      ],
    };
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
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          },
        },
      ],
    };

    return (
      <section className="mb-5">
        <Slider {...settings} className="cs-banner-section">
          {this.state.banners.map((banner, index) => {
            return (
              <div key={index}>
                <div
                  className="cs-carousel-item"
                  style={{ backgroundImage: `url(${banner.img})` }}
                >
                  <span>{banner.title}</span>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    );
  }
}
