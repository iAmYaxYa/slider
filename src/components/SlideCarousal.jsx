import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import { list, longList } from "../data";
import { FaQuoteRight } from "react-icons/fa";

const SlideCarousal = () => {
  const [people, setPeople] = useState(longList);
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div className="slick-container">
      <Slider {...setting}>
        {people?.map((person) => {
          const { image, name, title, quote } = person;
          return (
            <div key={person.id}>
              <img src={image} className="person-img" alt={name} />
              <h5 className="name">{name}</h5>
              <h6 className="title">{title}</h6>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlideCarousal;
