import React from "react";

// reactstrap components
import { Button, Card, CardImg, Container, Modal, Row, Col } from "reactstrap";

export default class WebExtended extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  render() {
    const images = {
      website: {
        aktiffelsefe: require("assets/img/theme/web/aktiffelsefe.jpg"),
        bomar: require("assets/img/theme/web/bomar.jpg"),
        diaspora: require("assets/img/theme/web/diaspora.jpg"),
        dora: require("assets/img/theme/web/dorakapi.jpg"),
        gencken: require("assets/img/theme/web/gencken.jpg"),
        hacettepe: require("assets/img/theme/web/hacettepe.jpg"),
        samopar: require("assets/img/theme/web/samopar.jpg"),
        sky: require("assets/img/theme/web/sky.jpg"),
        turkkan: require("assets/img/theme/web/turkkan.jpg")
      }
    };

    const marginBox = {
      margin: "10px"
    };
    return (
      <>
        <section
          className="section bg-gradient-info"
          style={{ paddingTop: "150px" }}
        >
          <Container>
            <Row className="justify-content-center text-center mb-lg">
              <Col lg="12">
                <h2 className="display-3">{this.props.header}</h2>
                <p className="lead text-white">{this.props.desc}</p>
              </Col>
              <Col lg="3" style={marginBox}>
                <CardImg
                  alt="..."
                  src={images.website.aktiffelsefe}
                  style={{ cursor: "pointer" }}
                />
              </Col>
              <Col lg="3" style={marginBox}>
                {/*onClick={() => this.toggleModal("moreModal")}*/}
                <CardImg
                  alt="..."
                  src={images.website.bomar}
                  style={{ cursor: "pointer" }}
                />
              </Col>
              <Col lg="3" style={marginBox}>
                <CardImg
                  alt="..."
                  src={images.website.diaspora}
                  style={{ cursor: "pointer" }}
                />
              </Col>
              <Col lg="3" style={marginBox}>
                <CardImg
                  alt="..."
                  src={images.website.dora}
                  style={{ cursor: "pointer" }}
                />
              </Col>
              <Col lg="3" style={marginBox}>
                <CardImg
                  alt="..."
                  src={images.website.gencken}
                  style={{ cursor: "pointer" }}
                />
              </Col>
              <Col lg="3" style={marginBox}>
                <CardImg
                  alt="..."
                  src={images.website.hacettepe}
                  style={{ cursor: "pointer" }}
                />
              </Col>
              <Col lg="3" style={marginBox}>
                <CardImg
                  alt="..."
                  src={images.website.samopar}
                  style={{ cursor: "pointer" }}
                />
              </Col>
              <Col lg="3" style={marginBox}>
                <CardImg
                  alt="..."
                  src={images.website.sky}
                  style={{ cursor: "pointer" }}
                />
              </Col>
              <Col lg="3" style={marginBox}>
                <CardImg
                  alt="..."
                  src={images.website.turkkan}
                  style={{ cursor: "pointer" }}
                />
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
