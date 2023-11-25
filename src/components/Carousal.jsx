import { useEffect, useState } from "react";
import { list, longList, shortList } from "../data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousal = () => {
  const [people, setPeople] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const newPerson = (oldPerson - 1 + people.length) % people.length;
      return newPerson;
    });
  };
  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const newPerson = (oldPerson + 1) % people.length;
      return newPerson;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 5000);
    console.log(sliderId);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);
  return (
    <div className="slider-container">
      {people?.map((person, personIndex) => {
        const { image, name, title, quote } = person;
        return (
          <div
            className={
              personIndex === currentPerson ? "slide" : "slide slide-inactive"
            }
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
            }}
            key={person.id}
          >
            <img src={image} className="person-img" alt={name} />
            <h5 className="name">{name}</h5>
            <h6 className="title">{title}</h6>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </div>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Carousal;
