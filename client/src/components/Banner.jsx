import { useState } from "react";
import "../Styles/Banner.css";
import arrowLeft from "../assets/images/arrowleft.png";
import arrowRight from "../assets/images/arrowright.png";
import dune2 from "../assets/images/dune2.jpg";
import kungfupanda2 from "../assets/images/kungfupanda2.jpg";
import ltm from "../assets/images/ltm.jpg";

const moviesList = [
  {
    imgSrc: {dune2},
    name: "Dune 2",
    id: 1,
  },
  {
    imgSrc: {kungfupanda2},
    name: "Kung Fu Panda 4",
    id: 2,
  },
  {
    imgSrc: {ltm},
    name: "Les 3 Mousquetaires",
    id: 3,
  },
];

function Banner() {
  const [moviesIndex, setMoviesIndex] = useState(0);

  function showNextImg() {
    setMoviesIndex((item) => (item === moviesList.length - 1 ? 0 : item + 1));
  }

  function showPrevImg() {
    setMoviesIndex((item) => (item === 0 ? moviesList.length - 1 : item - 1));
  }

  return (
    <section className="containerMovies">
      <img src="./src/assets/images/logo.svg" alt="logo" className="imgLogo" />
      <figure className="imgMovie">
        {moviesList.map((movie) => (
          <img
            className="imgBanner"
            src={movie.imgSrc}
            alt={movie.name}
            key={movie.name}
            style={{ translate: `${-100 * moviesIndex}%` }}
          />
        ))}
      </figure>
      <button className="buttonRight" type="button" onClick={showNextImg}>
        <img
          className="arrow"
          src={arrowRight}
          alt="arrow right"
        />
      </button>
      <button className="buttonLeft" type="button" onClick={showPrevImg}>
        <img
          className="arrow"
          src={arrowLeft}
          alt="arrow left"
        />
      </button>
      <article className="containerDotButton">
        {moviesList.map((movie, index) => (
          <button
            type="button"
            className={index === moviesIndex ? "dotButton on" : "dotButton off"}
            onClick={() => setMoviesIndex(index)}
            key={movie.name}
          >
            {index}
          </button>
        ))}
      </article>
    </section>
  );
}
export default Banner;
