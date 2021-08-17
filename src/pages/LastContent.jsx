import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import "./LastContent.scss";
import Facebook from "../assets/img/facebook-socmed.svg";
import Instagram from "../assets/img/ig-socmed.svg";
import Youtube from "../assets/img/youtube-socmed.svg";
import NimoTV from "../assets/img/nimo-socmed.svg";
import Tiktok from "../assets/img/tiktok-socmed.svg";

export default function LastContent() {
  return (
    <Container id="tentang" fluid className=" last-content-container ">
      <Row>
        <Col>
          <div className="d-flex justify-content-center">
            <h2>Ikuti Akun Resmi Kami</h2>
          </div>
        </Col>
      </Row>
      <Row className="d-flex align-items-center justify-content-center">
        <Col>
          <a href="https://www.facebook.com/Team.RRQ">
            <Image src={Facebook} />
          </a>
        </Col>
        <Col>
          <a href="https://www.instagram.com/teamrrq/">
            <Image src={Instagram} />
          </a>
        </Col>
        <Col>
          <a href="https://www.youtube.com/channel/UCsE7IVpsU-jk6vAdBP9ZREg">
            <Image src={Youtube} />
          </a>
        </Col>
        <Col>
          <a href="https://www.nimo.tv/rrq-lemon">
            <Image src={NimoTV} />
          </a>
        </Col>
        <Col>
          <a href="https://www.tiktok.com/@teamrrq?lang=en">
            <Image src={Tiktok} />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
