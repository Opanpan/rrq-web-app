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
        <Container fluid className="p-0">
          <div className="footer-item-container">
            <Row>
              <Col className="col-auto">
                <Image src={Logo} />
              </Col>
              <Col className="col-auto">
                <ul>
                  <div className="li-title">
                    <li>REX REGUM QEON</li>
                  </div>
                  <div className="li-item">
                    <li>About</li>
                    <li>Match</li>
                    <li>News</li>
                    <li>Videos</li>
                    <li>Shop</li>
                    <li>Partners</li>
                    <li>Brand Ambassador</li>
                    <li>RRQ Kingdom</li>
                    <li>RRQ Academy</li>
                    <li>Contact</li>
                  </div>
                </ul>
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
                  <div className="li-title">
                    <li>FOLLOW US</li>
                  </div>
                  <div className="d-flex justify-content-between li item">
                    <a href="https://www.instagram.com/teamrrq/">
                      <Image className="img-item" src={Instagram} />
                    </a>
                    <a href="https://www.facebook.com/Team.RRQ">
                      <Image className="img-item" src={Facebook} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCsE7IVpsU-jk6vAdBP9ZREg">
                      <Image className="img-item" src={Youtube} />
                    </a>
                  </div>
                </ul>
              </Col>
            </Row>
          </div>
          <div className="d-flex justify-content-center footer-created">
            <h5>?? 2013 - 2020 MADE BY REX REGUM QEON TEAM</h5>
          </div>
        </Container>
      ) : (
        ""
      )}
    </div>
  );
}
