import React from "react";
import "./NavbarRRQ.scss";
import { Container } from "react-bootstrap";

export default function NavbarRRQ() {
  return (
    <Container fluid className="p-0 navbarposition">
      <div class="d-flex justify-content-center align-items-center navbarRRQ">
        <a href="#rrq-streamer">RRQ STREAMER</a>
        <a href="#tentang">TENTANG</a>
        <a href="#rrq-rekrutmen">REKRUTMEN</a>
        <a href="#streamer">STREAMERS</a>
        <a href="#event">EVENT</a>
      </div>
    </Container>
  );
}
