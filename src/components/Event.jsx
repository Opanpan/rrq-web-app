import React from "react";
import EventImg from "../assets/img/event.svg";
import "./Event.scss";
import NimoIcon from "../assets/img/nimo-icon.svg";
import { Image, Button, Col, Row, Container } from "react-bootstrap";

export default function Event() {
  return (
    <Container fluid className="event-container">
      <Row>
        <Col className="d-flex justify-content-xl-start justify-content-center">
          <Image className="event-img" src={EventImg} />
        </Col>
        <Col className="d-flex justify-content-xl-start justify-content-center ">
          <div className="event-detail">
            <Button className="btn-live align-content-center">Live Show</Button>
            <h2>Curhat Dong, Kak!</h2>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h5>
            <div style={{ marginTop: "24px" }}>
              <div className="d-flex justify-content-between schedule">
                <h5>Jadwal Streaming</h5>
                <div>
                  <h5 style={{ fontWeight: "700" }}>Jumat, 14.00-16.00</h5>
                  <h5 style={{ fontWeight: "700" }}>Sabtu, 14.00-16.00</h5>
                </div>
              </div>
              <div
                style={{ marginTop: "16px" }}
                className="d-flex justify-content-between schedule"
              >
                <h5>Streamer</h5>
                <div>
                  <h5>Sinka</h5>
                </div>
              </div>
            </div>
            <Button className="btn-watch align-content-center">
              Tonton di <Image className="d-inline" src={NimoIcon} />
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
