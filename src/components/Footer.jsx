import React from "react";
import "./Footer.scss";
import Cover from "../assets/img/cover.svg";
import { Image, Container } from "react-bootstrap";

export default function Footer() {
  return (
    <Container fluid className="p-0 footer-container">
      <div className="img-footer">
        <Image width="100%" src={Cover} />
      </div>
      <div className="d-flex justify-content-center img-title">
        <h1>
          Ingin bekerja sama dengan RRQ Streamers?
          <a
            style={{ marginLeft: "12px" }}
            href="#hubungi-kami"
            className="link"
          >
            Hubungi Kami
          </a>
        </h1>
      </div>
    </Container>
  );
}
