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
                <div className="li-item ">
                  <a href="#">
                    <li>About</li>
                  </a>
                  <a href="#">
                    <li>Match</li>
                  </a>
                  <a href="#">
                    <li>News</li>
                  </a>
                  <a href="#">
                    <li>Videos</li>
                  </a>
                  <a href="#">
                    <li>Shop</li>
                  </a>
                  <a href="#">
                    <li>Partners</li>
                  </a>
                  <a href="#">
                    <li>Brand Ambassador</li>
                  </a>
                  <a href="#">
                    <li>RRQ Kingdom</li>
                  </a>
                  <a href="#">
                    <li>RRQ Academy</li>
                  </a>
                  <a href="#">
                    <li>Contact</li>
                  </a>
                </div>
              </ul>
            </Col>
            <Col className="col-auto">
              <ul>
                <li className="li-title">DIVISION</li>
                <div className="li-item ">
                  <a href="#">
                    <li>Mobile Legend</li>
                  </a>
                  <a href="#">
                    <li>PUBG Mobile</li>
                  </a>
                  <a href="#">
                    <li>FREE FIRE</li>
                  </a>
                  <a href="#">
                    <li>VALORANT</li>
                  </a>
                  <a href="#">
                    <li>FIFA</li>
                  </a>
                  <a href="#">
                    <li>FORTNITE</li>
                  </a>
                </div>
              </ul>
            </Col>
            <Col className="col-auto">
              <ul>
                <li className="li-title">FOLLOW US</li>

                <div className="li-item d-flex justify-content-between">
                  <a href="https://www.instagram.com/teamrrq/">
                    <Image className="footer-socmed" src={Instagram} />
                  </a>
                  <a href="https://www.facebook.com/Team.RRQ">
                    <Image className="footer-socmed" src={Facebook} />
                  </a>
                  <a href="https://www.youtube.com/teamrrq/">
                    <Image className="footer-socmed" src={Youtube} />
                  </a>
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
