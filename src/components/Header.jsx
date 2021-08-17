import React, { useState, useEffect } from "react";
import "./Header.scss";
import {
  Container,
  Button,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import Logo from "../assets/img/rrq-logo.svg";
import Facebook from "../assets/img/facebook.svg";
import Youtube from "../assets/img/youtube.svg";
import Instagram from "../assets/img/instagram.svg";
import Rog from "../assets/img/rog.svg";

export default function Header() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 992);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Image src={Logo} className="logo" />
        </Navbar.Brand>

        {isDesktop ? (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto flex-column">
              <Nav.Item>
                <Nav.Link className="d-inline" href="#home">
                  <Image className="socmed" src={Instagram} />
                </Nav.Link>
                <Nav.Link
                  className="d-inline"
                  href="https://www.youtube.com/channel/UCsE7IVpsU-jk6vAdBP9ZREg"
                >
                  <Image className="socmed" src={Youtube} />
                </Nav.Link>
                <Nav.Link className="d-inline" href="#home">
                  <Image className="socmed" src={Facebook} />
                </Nav.Link>
                <Button variant="warning" className="btn-login-member">
                  <h5>LOGIN MEMBERSHIP</h5>
                </Button>
              </Nav.Item>
              <Nav.Item className="mt-3">
                <Nav>
                  <NavDropdown className="nav-item" title="DIVISION">
                    <NavDropdown.Item>Division 1</NavDropdown.Item>
                    <NavDropdown.Item>Division 2 </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className="nav-item">MATCH</Nav.Link>
                  <NavDropdown className="nav-item" title="NEWS & MEDIA">
                    <NavDropdown.Item>News 1</NavDropdown.Item>
                    <NavDropdown.Item>News 2 </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown className="nav-item" title="COMMUNITY">
                    <NavDropdown.Item>Community 1</NavDropdown.Item>
                    <NavDropdown.Item>Community 2</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown className="nav-item" title="COMPANY">
                    <NavDropdown.Item>Company 1</NavDropdown.Item>
                    <NavDropdown.Item>Company 2</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className="nav-item">SHOP</Nav.Link>
                </Nav>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        ) : (
          ""
        )}
        <Navbar.Brand href="https://rog.asus.com/id/">
          <Image src={Rog} className="logo" />
          <Navbar.Toggle
            style={{ marginLeft: "16px" }}
            aria-controls="basic-navbar-nav"
          />
        </Navbar.Brand>
      </Container>
      {isDesktop ? (
        ""
      ) : (
        <div>
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{
              textAlign: "center",
              width: "100vw",
              margin: "auto",
            }}
          >
            <Nav className="me-auto">
              <NavDropdown title="DIVISION">
                <NavDropdown.Item>Division 1</NavDropdown.Item>
                <NavDropdown.Item>Division 2 </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>MATCH</Nav.Link>
              <NavDropdown title="NEWS & MEDIA">
                <NavDropdown.Item>News 1</NavDropdown.Item>
                <NavDropdown.Item>News 2 </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="COMMUNITY">
                <NavDropdown.Item>Community 1</NavDropdown.Item>
                <NavDropdown.Item>Community 2</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="COMPANY">
                <NavDropdown.Item>Company 1</NavDropdown.Item>
                <NavDropdown.Item>Company 2</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>SHOP</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      )}
    </Navbar>
  );
}
