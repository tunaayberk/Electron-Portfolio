import React from "react";
import { NavLink } from "react-router-dom";

// reactstrap components
import { Button, Card, CardImg, Container, Modal, Row, Col } from "reactstrap";

export default class Web extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  render() {
    const images = {
      website: {
        bomar: require("assets/img/theme/web/bomar.jpg"),
        diaspora: require("assets/img/theme/web/diaspora.jpg"),
        sky: require("assets/img/theme/web/sky.jpg")
      }
    };
    const style = {
      margin: "10px"
    };
    return (
      <>
        <section className="section">
          <Container>
            <Row className="justify-content-center text-center mb-lg">
              <Col lg="12">
                <h2 className="display-3">{this.props.header}</h2>
                <p className="lead text-muted">{this.props.desc}</p>
              </Col>
              <Col lg="4" style={style}>
                {/*onClick={() => this.toggleModal("moreModal")}*/}
                <CardImg
                  alt="..."
                  src={images.website.bomar}
                  style={{ cursor: "pointer" }}
                />
              </Col>
              <Col lg="4" style={style}>
                <CardImg
                  alt="..."
                  src={images.website.diaspora}
                  style={{ cursor: "pointer" }}
                />
              </Col>
              <Col lg="4" style={style}>
                <CardImg
                  alt="..."
                  src={images.website.sky}
                  style={{ cursor: "pointer" }}
                />
              </Col>
              <Col lg="12" style={{ marginTop: "30px" }}>
                <NavLink to="/web-portfolio">
                  <Button
                    className="text-white bg-gradient-warning ml-auto"
                    color="link"
                    type="button"
                  >
                    More
                  </Button>
                </NavLink>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
