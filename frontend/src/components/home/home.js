import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../particle";
import Headshot from "../../assets/headshot.jpg";
import Type from "../type";

function Home() {
    return (
      <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Welcome!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
  
                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> KITTY LIU</strong>
                </h1>
  
                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>
  
              <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                  src={Headshot}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    );
  }
  
  export default Home;



