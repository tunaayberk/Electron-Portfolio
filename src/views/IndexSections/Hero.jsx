import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

//animations
import Typer from "components/Animations/Typer.jsx";

//page divider style
import "assets/css/pageDivider.scss";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          <section
            className="section section-lg section-hero section-shaped"
            style={{ minHeight: "700px" }}
          >
            <div
              className="shape shape-default"
              style={{
                background:
                  "linear-gradient(210deg, #3461c1 15%, #ca45e2 70%, #f461c1 94%)"
              }}
            />
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <Typer
                      heading={""}
                      dataText={[
                        "Hi, I am Tuna Ayberk.",
                        "I Code with Love.",
                        "I Love to Design."
                      ]}
                    />
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-200">
              <svg
                className="editorial"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 24 150 28 "
                preserveAspectRatio="none"
              >
                <defs>
                  <path
                    id="gentle-wave"
                    d="M-160 44c30 0 
                        58-18 88-18s
                        58 18 88 18 
                        58-18 88-18 
                        58 18 88 18
                        v44h-352z"
                  />
                </defs>
                <g className="parallax1">
                  <use href="#gentle-wave" x="50" y="3" fill="#f461c1" />
                </g>
                <g className="parallax2">
                  <use href="#gentle-wave" x="50" y="0" fill="#4579e2" />
                </g>
                <g className="parallax3">
                  <use href="#gentle-wave" x="50" y="9" fill="#3461c1" />
                </g>
                <g className="parallax4">
                  <use href="#gentle-wave" x="50" y="6" fill="#f4f5f7" />
                </g>
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
