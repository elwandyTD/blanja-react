import React, { Component } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { withRouter } from "react-router-dom";

import "./category.css";
import LeftArrow from "../../assets/icons/arrow-left.png";
import RightArrow from "../../assets/icons/arrow-right.png";

function CustomArrow(props) {
  const { className, onClick, srcImage } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={srcImage} alt="Arrow" />
    </div>
  );
}

class Category extends Component {
  state = {
    categories: [],
  };

  getAllCategory = () => {
    const url = process.env.REACT_APP_API_URL + "/category";

    axios
      .get(url)
      .then(({ data }) => {
        this.setState({
          categories: data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  seeCategory = (search) => {
    const { history } = this.props;

    history.push({
      pathname: "/product",
      search,
    });
  };

  componentDidMount = () => {
    this.getAllCategory();
    console.log(this.props);
  };

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
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };
    return (
      <section className="category-section">
        <span className="cs-title">Category</span>
        <p className="cs-subtitle">What are you currently looking for</p>
        <Slider {...settings}>
          {this.state.categories.data &&
            this.state.categories.data.map((category, index) => {
              // console.log(category);
              return (
                <div
                  // to={{
                  //   pathname: "/product",
                  //   // pathname: "/product?category=" + category.category_link,
                  //   search: "?category=" + category.category_link,
                  //   // state: { search: "?category=" + category.category_link },
                  // }}
                  onClick={() =>
                    this.seeCategory("?category=" + category.category_link)
                  }
                  key={index}
                >
                  <div
                    className="cs-category-item"
                    style={{
                      backgroundColor: category.category_color,
                      backgroundImage: `url('${
                        process.env.REACT_APP_API_URL + category.category_image
                      }')`,
                    }}
                  >
                    <span>{category.category_name}</span>
                  </div>
                </div>
              );
            })}
        </Slider>
      </section>
    );
  }
}

export default withRouter(Category);
