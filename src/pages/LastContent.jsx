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
    <Container fluid className=" last-content-container ">
      <Row>
        <Col>
          <div className="d-flex justify-content-center">
            <h2>Ikuti Akun Resmi Kami</h2>
          </div>
        </Col>
      </Row>
      <Row className="d-flex align-items-center">
        <Col>
          <Image src={Facebook} />
        </Col>
        <Col>
          <Image src={Instagram} />
        </Col>
        <Col>
          <Image src={Youtube} />
        </Col>
        <Col>
          <Image src={NimoTV} />
        </Col>
        <Col>
          <Image src={Tiktok} />
        </Col>
      </Row>
    </Container>
  );
}
