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
              <div>
                <h4>REX REGUM QEON</h4>
                <h5>About</h5>
                <h5>Match</h5>
                <h5>News</h5>
                <h5>Videos</h5>
                <h5>Shop</h5>
                <h5>Partners</h5>
                <h5>Brand Ambassador</h5>
                <h5>RRQ Kingdom</h5>
                <h5>RRQ Academy</h5>
                <h5>Contact</h5>
              </div>
            </Col>
            <Col className="col-auto">
              <ul>
                <div className="li-title">
                  <li>DIVISION</li>
                </div>
                <div className="li-item">
                  <li>Mobile Legend</li>
                  <li>PUBG Mobile</li>
                  <li>FREE FIRE</li>
                  <li>VALORANT</li>
                  <li>FIFA</li>
                  <li>FORTNITE</li>
                </div>
              </ul>
            </Col>
            <Col className="col-auto">
              <ul>
                <li className="li-title">FOLLOW US</li>

                <div className="d-flex justify-content-between">
                  <Image className="li-item" src={Instagram} />
                  <Image className="li-item" src={Facebook} />
                  <Image className="li-item" src={Youtube} />
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
