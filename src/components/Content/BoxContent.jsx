import React from "react";
// reactstrap components
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

import {
  MongoDB,
  MySQL,
  NextJS,
  NodeJS,
  ReactLogo,
  ReactRouter,
  Webpack,
  Css,
  Html,
  JavaScript,
  JQuery,
  Materialize,
  MaterialUi,
  Photoshop,
  Illustrator,
  Redux,
  Babel,
  CPlus,
  Es6
} from "assets/logos/index.jsx";

const margin = {
  margin: "30px 0"
};
export default function BoxContent() {
  return (
    <section className="section pb-0 bg-gradient-warning">
      <Container style={{ paddingBottom: "150px" }}>
        <div className="text-center">
          <h4 className="display-4 mb-5 mt-5">
            Working with these technologies
          </h4>
          <Row className="justify-content-center">
            <Col lg="2" xs="4" style={margin}>
              <a href="#" id="mongodb" target="_blank">
                <MongoDB width="100" height="100" />
              </a>
              <UncontrolledTooltip delay={0} target="mongodb">
                MongoDB
              </UncontrolledTooltip>
            </Col>

            <Col lg="2" xs="4" style={margin}>
              <a href="#" id="mysql" target="_blank">
                <MySQL width="100" height="100" />
              </a>
              <UncontrolledTooltip delay={0} target="mysql">
                MySQL
              </UncontrolledTooltip>
            </Col>

            <Col lg="2" xs="4" style={margin}>
              <a href="#" id="nextjs" target="_blank">
                <NextJS width="100" height="100" />
              </a>
              <UncontrolledTooltip delay={0} target="nextjs">
                NextJS
              </UncontrolledTooltip>
            </Col>

            <Col lg="2" xs="4" style={margin}>
              <a href="#" id="nodejs" target="_blank">
                <NodeJS width="100" height="100" />
              </a>
              <UncontrolledTooltip delay={0} target="nodejs">
                NodeJS
              </UncontrolledTooltip>
            </Col>

            <Col lg="2" xs="4" style={margin}>
              <a href="#" id="react" target="_blank">
                <ReactLogo width="100" height="100" />
              </a>
              <UncontrolledTooltip delay={0} target="react">
                React
              </UncontrolledTooltip>
            </Col>

            <Col lg="2" xs="4" style={margin}>
              <a href="#" id="reactrouter" target="_blank">
                <ReactRouter width="100" height="100" />
              </a>
              <UncontrolledTooltip delay={0} target="reactrouter">
                React-Router
              </UncontrolledTooltip>
            </Col>

            <Col lg="2" xs="4" style={margin}>
              <a href="#" id="webpack" target="_blank">
                <Webpack width="100" height="100" />
              </a>
              <UncontrolledTooltip delay={0} target="webpack">
                Webpack
              </UncontrolledTooltip>
            </Col>

            <Col lg="2" xs="4" style={margin}>
              <a href="#" id="css" target="_blank">
                <Css width="100" height="100" />
              </a>
              <UncontrolledTooltip delay={0} target="css">
                CSS 3
              </UncontrolledTooltip>
            </Col>

            <Col lg="2" xs="4" style={margin}>
              <a href="#" id="htmllogo" target="_blank">
                <Html width="100" height="100" />
              </a>
              <UncontrolledTooltip delay={0} target="htmllogo">
                HTML 5
              </UncontrolledTooltip>
            </Col>

            <Col lg="2" xs="4" style={margin}>
              <a href="#" id="javascript" target="_blank">
                <JavaScript width="100" height="100" />
              </a>
              <UncontrolledTooltip delay={0} target="javascript">
                JavaScript
              </UncontrolledTooltip>
            </Col>

            <Col lg="2" xs="4" style={margin}>
              <a href="#" id="jquery" target="_blank">
                <JQuery width="100" height="100" />
              </a>
              <UncontrolledTooltip delay={0} target="jquery">
                JQuery
              </UncontrolledTooltip>
            </Col>

            <Col lg="2" xs="4" style={margin}>
              <a href="#" id="materialize" target="_blank">
                <Materialize width="100" height="100" />
              </a>
              <UncontrolledTooltip delay={0} target="materialize">
                Materialize
              </UncontrolledTooltip>
            </Col>

            <Col lg="2" xs="4" style={margin}>
              <a href="#" id="materialui" target="_blank">
                <MaterialUi width="100" height="100" />
              </a>
              <UncontrolledTooltip delay={0} target="materialui">
                Material UI
              </UncontrolledTooltip>
            </Col>

            <Col lg="2" xs="4" style={margin}>
              <a href="#" id="photoshop" target="_blank">
                <Photoshop width="100" height="100" />
              </a>
              <UncontrolledTooltip delay={0} target="photoshop">
                Photoshop CC
              </UncontrolledTooltip>
            </Col>
            <Col lg="2" xs="4" style={margin}>
              <a href="#" id="illustrator" target="_blank">
                <Illustrator width="100" height="100" />
              </a>
              <UncontrolledTooltip delay={0} target="illustrator">
                Illustrator CC
              </UncontrolledTooltip>
            </Col>
            <Col lg="2" xs="4" style={margin}>
              <a href="#" id="redux" target="_blank">
                <Redux width="100" height="100" />
              </a>
              <UncontrolledTooltip delay={0} target="redux">
                Redux
              </UncontrolledTooltip>
            </Col>
            <Col lg="2" xs="4" style={margin}>
              <a href="#" id="babel" target="_blank">
                <Babel width="100" height="100" />
              </a>
              <UncontrolledTooltip delay={0} target="babel">
                Babel
              </UncontrolledTooltip>
            </Col>
            <Col lg="2" xs="4" style={margin}>
              <a href="#" id="cplus" target="_blank">
                <CPlus width="100" height="100" />
              </a>
              <UncontrolledTooltip delay={0} target="cplus">
                C++
              </UncontrolledTooltip>
            </Col>
            <Col lg="2" xs="4" style={margin}>
              <a href="#" id="es6" target="_blank">
                <Es6 width="100" height="100" />
              </a>
              <UncontrolledTooltip delay={0} target="es6">
                ECMAScript 6/7/8
              </UncontrolledTooltip>
            </Col>
          </Row>
        </div>
      </Container>
      {/* SVG separator */}
      <div className="separator separator-bottom separator-skew zindex-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon className="fill-white" points="2560 0 2560 100 0 100" />
        </svg>
      </div>
      <div className="separator separator-top separator-skew zindex-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon className="fill-white" points="0 0 2560 100 5000 0" />
        </svg>
      </div>
    </section>
  );
}
