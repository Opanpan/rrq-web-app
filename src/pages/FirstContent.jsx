import React from "react";
import "./FirstContent.scss";
import Vector from "../assets/img/vector.svg";
import Picture1 from "../assets/img/picture.svg";
import Anime from "../assets/img/anime.svg";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

export default function FirstContent() {
  return (
    <Container fluid id="rrq-streamer">
      <Row>
        <Col className="d-flex justify-content-center">
          <div className="rrq-streamer">
            <h1>RRQ Streamer</h1>
            <h3>
              RRQ Streamer merupakan agensi Virtual Youtuber (VTuber) di
              Indonesia dengan fokus utama Live Streaming. RRQ Streamer menaungi
              puluhan VTuber berbakat dari berbagai kalangan, mulai dari
              Pro-Player, Gamer, Amateur dll.
            </h3>
            <div
              style={{ marginTop: "18px" }}
              className="d-flex justify-content-center align-items-center"
            >
              <h4 className="d-inline">
                <a href="#">Selengkapnya</a>
              </h4>
              <Image className="d-inline" src={Vector} />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="rrq-rekrutmen" id="rrq-rekrutmen">
        <Col className="d-flex justify-content-xl-end justify-content-center">
          <Image src={Picture1} className="picture-rekrutmen" />
        </Col>
        <Col className="d-flex justify-content-xl-start justify-content-center">
          <div className="rrq-rekrutmen-streamer">
            <h1>Rekrutmen Streamer</h1>
            <h3>
              RRQ Streamer sedang membuka audisi untuk menjadi bagian dari kami.
              Untuk kamu yang punya pengalaman menjadi streamer, kepribadian
              yang menarik dan unik, atau kamu yang penasaran gimana sih rasanya
              jadi streamer boleh banget buat ikut audisi kami
            </h3>
            <Button variant="danger" className="btn-audisi">
              <h5>Daftar Audisi</h5>
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="rrq-vtuber flex-column-reverse flex-xl-row">
        <Col className="d-flex justify-content-xl-end justify-content-center ">
          <div className="rrq-vtuber-detail">
            <h1>RYO</h1>
            <h3
              className="d-inline"
              style={{
                color: "#b32125",
                position: "relative",
                bottom: "15px",
                marginRight: "12px",
              }}
            >
              Sebagai
            </h3>
            <h2 className="d-inline">V-Tuber</h2>
            <h3>
              Ryo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h3>
            <Button variant="danger" className="btn-vtuber">
              <h5>Selengkapnya</h5>
            </Button>
          </div>
        </Col>
        <Col className="d-flex justify-content-xl-start justify-content-center">
          <Image className="rrq-vtuber-img" src={Anime} />
        </Col>
      </Row>
    </Container>
  );
}
