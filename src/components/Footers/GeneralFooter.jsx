/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

const GeneralFooter = () => {
  return (
    <>
      <Container>
        <Row className="row-grid align-items-center my-md">
          <Col lg="6">
            <h4 className="mb-0 font-weight-light">
              Let's get in touch on any of these platforms.
            </h4>
          </Col>
          <Col className="text-lg-center btn-wrapper" lg="6">
            <Button
              className="btn-neutral btn-icon-only btn-round ml-1"
              color="linkedin"
              href="https://www.linkedin.com/in/tuna-ayberk-ozmen/"
              size="lg"
              target="_blank"
              id="tooltip475038092"
            >
              <i className="fa fa-linkedin" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip475038092">
              Add me on LinkedIn
            </UncontrolledTooltip>

            <Button
              className="btn-neutral btn-icon-only btn-round"
              color="twitter"
              href="https://twitter.com/tunaayberk"
              id="tooltip475038074"
              size="lg"
              target="_blank"
            >
              <i className="fa fa-twitter" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip475038074">
              Follow me
            </UncontrolledTooltip>

            <Button
              className="btn-neutral btn-icon-only btn-round ml-1"
              color="github"
              href="https://github.com/tunaayberk"
              id="tooltip495507257"
              size="lg"
              target="_blank"
            >
              <i className="fa fa-github" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip495507257">
              Star on Github
            </UncontrolledTooltip>

            <Button
              className="btn-neutral btn-icon-only btn-round ml-1"
              color="stack"
              href="https://stackoverflow.com/users/11233593/tunaayberk"
              id="tooltip4955072572"
              size="lg"
              target="_blank"
            >
              <i className="fa fa-stack-overflow" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip4955072572">
              Check me on Stackoverflow
            </UncontrolledTooltip>
          </Col>
        </Row>
        <hr />
        <Row className="align-items-center justify-content-md-between">
          <Col md="6">
            <div className="copyright">
              © {new Date().getFullYear()} Tuna Ayberk Ozmen
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GeneralFooter;
