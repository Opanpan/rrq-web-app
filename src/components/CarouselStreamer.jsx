import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselStreamer.scss";
import { Image, Container } from "react-bootstrap";
import Slider from "react-slick";
import Cover from "../assets/img/streamer.svg";
import Vector from "../assets/img/vector.svg";
import ArrowRight from "../assets/img/arrow-right.svg";
import ArrowLeft from "../assets/img/arrow-left.svg";
import Event from "./Event";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <div className="d-flex justify-content-center streamer-arrow">
        <Image width="20%" src={ArrowRight} />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <div className="d-flex justify-content-center streamer-arrow">
        <Image width="20%" src={ArrowLeft} />
      </div>
    </div>
  );
}

export default function CarouselRRQ() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "center",
    dotsClass: "button__bar",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Container fluid className="p-0">
      <div className="streamer">
        <div
          id="streamer"
          className="d-flex justify-content-between streamer-title"
        >
          <h1 className="d-inline">STREAMER</h1>
          <div>
            {isDesktop ? <h4 className="d-inline">Lihat Semua</h4> : ""}
            <Image className="d-inline" src={Vector} />
          </div>
        </div>
        <Slider
          {...settings}
          {...(isDesktop ? { centerMode: true } : { centerMode: false })}
        >
          <div className="streamer-card">
            <Image className="streamer-img" src={Cover} />{" "}
          </div>
          <div className="streamer-card">
            <Image className="streamer-img" src={Cover} />{" "}
          </div>
          <div className="streamer-card">
            <Image className="streamer-img" src={Cover} />{" "}
          </div>
        </Slider>

        <div
          id="event"
          className="d-flex justify-content-between streamer-title"
        >
          <h1 className="d-inline">Event</h1>
          <div>
            {isDesktop ? <h4 className="d-inline">Lihat Semua</h4> : ""}
            <Image className="d-inline" src={Vector} />
          </div>
        </div>
        <Slider
          {...settings}
          {...(isDesktop ? { centerMode: true } : { centerMode: false })}
        >
          <div className="streamer-card">
            <Event />
          </div>
          <div className="streamer-card">
            <Event />
          </div>
          <div className="streamer-card">
            <Event />
          </div>
        </Slider>
      </div>
    </Container>
  );
}
