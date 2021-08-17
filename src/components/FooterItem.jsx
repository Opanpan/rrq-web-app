import React, { useState, useEffect } from "react";
import "./FooterItem.scss";
import Logo from "../assets/img/rrq-logo.svg";
import Facebook from "../assets/img/fb.svg";
import Instagram from "../assets/img/ig.svg";
import Youtube from "../assets/img/yt.svg";
import { Image, Container, Row, Col } from "react-bootstrap";

export default function FoooterItem() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      {isDesktop ? (
        <Container fluid className="footer-item-container">
          <Row>
            <Col className="col-auto">
              <Image src={Logo} />
            </Col>
            <Col className="col-auto">
              <ul>
                <li className="li-title">REX REGUM QEON</li>
                <li className="li-item">About</li>
                <li className="li-item">Match</li>
                <li className="li-item">News</li>
                <li className="li-item">Videos</li>
                <li className="li-item">Shop</li>
                <li className="li-item">Partners</li>
                <li className="li-item">Brand Ambassador</li>
                <li className="li-item">RRQ Kingdom</li>
                <li className="li-item">RRQ Academy</li>
                <li className="li-item">Contact</li>
              </ul>
            </Col>
            <Col className="col-auto">
              <ul>
                <li className="li-title">DIVISION</li>
                <li className="li-item">Mobile Legend</li>
                <li className="li-item">PUBG Mobile</li>
                <li className="li-item">FREE FIRE</li>
                <li className="li-item">VALORANT</li>
                <li className="li-item">FIFA</li>
                <li className="li-item">FORTNITE</li>
              </ul>
            </Col>
            <Col className="col-auto">
              <ul>
                <li className="li-title">FOLLOW US</li>

                <div className="d-flex justify-content-between">
                  <Image className="footer-socmed li-item " src={Instagram} />
                  <Image className="footer-socmed li-item " src={Facebook} />
                  <Image className="footer-socmed li-item " src={Youtube} />
                </div>
              </ul>
            </Col>
          </Row>
        </Container>
      ) : (
        ""
      )}
    </div>
  );
}
