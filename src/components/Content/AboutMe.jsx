import React from "react";
// reactstrap components
import { Badge, Container, Row, Col } from "reactstrap";

export default function AboutMe() {
  return (
    <section className="section section-lg">
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="order-md-2" md="6">
            <img
              alt="..."
              className="img-fluid floating"
              src={require("assets/img/theme/tuna.png")}
            />
          </Col>
          <Col className="order-md-1" md="6">
            <div className="pr-md-5">
              <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                <i className="ni ni-settings-gear-65" />
              </div>
              <h3>About me</h3>
              <p>
                I have been working for the digital advertising industry since
                2010. I started this adventure with Graphic Design and worked
                for more than 50 customers with various design and development
                works. I have been working with PHP, JavaScript, HTML & CSS. I
                have been focusing on Full-stack Development and optimizations.
                Libraries & Environments: Node.js, Express.js, React.js, Redux,
                Webpack, Tensorflow.js
              </p>
              <ul className="list-unstyled mt-5">
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge className="badge-circle mr-3" color="success">
                        <i className="ni ni-settings-gear-65" />
                      </Badge>
                    </div>
                    <div>
                      <h6 className="mb-0">Fullstack Developer</h6>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge className="badge-circle mr-3" color="success">
                        <i className="ni ni-html5" />
                      </Badge>
                    </div>
                    <div>
                      <h6 className="mb-0">Agile Project Manager</h6>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge className="badge-circle mr-3" color="success">
                        <i className="ni ni-satisfied" />
                      </Badge>
                    </div>
                    <div>
                      <h6 className="mb-0">
                        Object Oriented and Functional Programming Enthusiastic
                      </h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
