import React from "react";

// reactstrap components
import { Button, Card, CardImg, Container, Modal, Row, Col } from "reactstrap";

export default class DesignExtended extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  render() {
    const images = {
      design: {
        ankara: require("assets/img/theme/design/ankara.jpg"),
        beforeafter: require("assets/img/theme/design/beforeafter.jpg"),
        decorilloCal: require("assets/img/theme/design/decorilloCal.jpg"),
        decorilloMail: require("assets/img/theme/design/decorilloMail.jpg"),
        decorilloMail2: require("assets/img/theme/design/decorilloMail2.jpg"),
        decorilloMail3: require("assets/img/theme/design/decorilloMail3.jpg"),
        decorilloNew: require("assets/img/theme/design/decorilloNew.jpg"),
        fmkbrochure: require("assets/img/theme/design/fmkbrochure.jpg"),
        genckenfest: require("assets/img/theme/design/genckenfest.jpg"),
        fmkbrochure: require("assets/img/theme/design/fmkbrochure.jpg"),
        genckenfest: require("assets/img/theme/design/genckenfest.jpg"),
        genckenSocial: require("assets/img/theme/design/genckenSocial.jpg"),
        genckenSocial2: require("assets/img/theme/design/genckenSocial2.jpg"),
        kacisFilm: require("assets/img/theme/design/kacis-film.jpg"),
        kacisFilm2: require("assets/img/theme/design/kacis-film2.jpg"),
        kacisFilm3: require("assets/img/theme/design/kacis-film3.jpg"),
        questor: require("assets/img/theme/design/questor.jpg"),
        ted: require("assets/img/theme/design/ted.jpg")
      }
    };

    const marginBox = {
      margin: "10px"
    };

    return (
      <>
        <section
          className="section bg-gradient-success"
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
                  src={images.design.kacisFilm2}
                  style={{ cursor: "pointer" }}
                />
              </Col>
              <Col lg="3" style={marginBox}>
                <CardImg
                  alt="..."
                  src={images.design.kacisFilm3}
                  style={{ cursor: "pointer" }}
                />
              </Col>
              <Col lg="3" style={marginBox}>
                <CardImg
                  alt="..."
                  src={images.design.questor}
                  style={{ cursor: "pointer" }}
                />
              </Col>
              <Col lg="3" style={marginBox}>
                <CardImg
                  alt="..."
                  src={images.design.ted}
                  style={{ cursor: "pointer" }}
                />
              </Col>
              <Col lg="3" style={marginBox}>
                <CardImg
                  alt="..."
                  src={images.design.genckenSocial}
                  style={{ cursor: "pointer" }}
                />
              </Col>
              <Col lg="3" style={marginBox}>
                <CardImg
                  alt="..."
                  src={images.design.genckenSocial2}
                  style={{ cursor: "pointer" }}
                />
              </Col>

              <Col lg="3" style={marginBox}>
                <CardImg
                  alt="..."
                  src={images.design.decorilloCal}
                  style={{ cursor: "pointer" }}
                />
              </Col>

              <Col lg="3" style={marginBox}>
                <CardImg
                  alt="..."
                  src={images.design.decorilloNew}
                  style={{ cursor: "pointer" }}
                />
              </Col>
              <Col lg="3" style={marginBox}>
                <CardImg
                  alt="..."
                  src={images.design.ankara}
                  style={{ cursor: "pointer" }}
                />
              </Col>
              <Col lg="3" style={marginBox}>
                {/*onClick={() => this.toggleModal("moreModal")}*/}
                <CardImg
                  alt="..."
                  src={images.design.beforeafter}
                  style={{ cursor: "pointer" }}
                />
              </Col>

              <Col lg="3" style={marginBox}>
                <CardImg
                  alt="..."
                  src={images.design.fmkbrochure}
                  style={{ cursor: "pointer" }}
                />
              </Col>
              <Col lg="3" style={marginBox}>
                <CardImg
                  alt="..."
                  src={images.design.genckenfest}
                  style={{ cursor: "pointer" }}
                />
              </Col>

              <Col lg="3" style={marginBox}>
                <CardImg
                  alt="..."
                  src={images.design.kacisFilm}
                  style={{ cursor: "pointer" }}
                />
              </Col>

              <Col lg="3" style={marginBox}>
                <CardImg
                  alt="..."
                  src={images.design.decorilloMail}
                  style={{ cursor: "pointer" }}
                />
              </Col>
              <Col lg="3" style={marginBox}>
                <CardImg
                  alt="..."
                  src={images.design.decorilloMail2}
                  style={{ cursor: "pointer" }}
                />
              </Col>
              <Col lg="3" style={marginBox}>
                <CardImg
                  alt="..."
                  src={images.design.decorilloMail3}
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
