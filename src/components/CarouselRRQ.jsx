import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselRRQ.scss";
import { Image, Container } from "react-bootstrap";
import Slider from "react-slick";
import Cover from "../assets/img/cover.svg";

export default function CarouselRRQ() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slides",
    dotsClass: "button__bar",
    arrows: true,
  };
  return (
    <Container fluid className="p-0 carousel-rrq">
      <Slider {...settings}>
        <div>
          <Image width="100%" src={Cover} />{" "}
        </div>
        <div>
          <Image width="100%" src={Cover} />{" "}
        </div>
        <div>
          <Image width="100%" src={Cover} />{" "}
        </div>
      </Slider>
    </Container>
  );
}
