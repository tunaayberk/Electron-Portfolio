import React from "react";
import { NavLink } from "react-router-dom";

// reactstrap components
import { Button, Card, CardImg, Container, Modal, Row, Col } from "reactstrap";

export default class Design extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  render() {
    const images = {
      website: {
        ankara: require("assets/img/theme/ankara.jpg"),
        questor: require("assets/img/theme/questor.jpg"),
        kacis: require("assets/img/theme/kacis-film3.jpg"),
        ted: require("assets/img/theme/ted.jpg")
      }
    };
    const style = {
      margin: "10px 0"
    };
    return (
      <>
        <section className="section bg-gradient-info">
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
          <Container>
            <Row className="justify-content-center text-center mb-lg">
              <Col lg="12">
                <h2 className="display-3">{this.props.header}</h2>
                <p className="lead text-white">{this.props.desc}</p>
              </Col>
              <Col lg="3" style={style}>
                <CardImg
                  alt="..."
                  src={images.website.ankara}
                  style={{ cursor: "pointer" }}
                />
                {/*onClick={() => this.toggleModal("moreModal")}*/}

                {/*<Modal
                  className="modal-dialog-centered modal-danger"
                  contentClassName="bg-gradient-danger"
                  isOpen={this.state.moreModal}
                  toggle={() => this.toggleModal("moreModal")}
                >
                  <div className="modal-header">
                    <h6 className="modal-title" id="modal-title-notification">
                      Your attention is required
                    </h6>
                    <button
                      aria-label="Close"
                      className="close"
                      data-dismiss="modal"
                      type="button"
                      onClick={() => this.toggleModal("moreModal")}
                    >
                      <span aria-hidden={true}>×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="py-3 text-center">
                      <i className="ni ni-bell-55 ni-3x" />
                      <h4 className="heading mt-4">You should read this!</h4>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia.
                      </p>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <Button className="btn-white" color="default" type="button">
                      Ok, Got it
                    </Button>
                    <Button
                      className="text-white ml-auto"
                      color="link"
                      data-dismiss="modal"
                      type="button"
                      onClick={() => this.toggleModal("moreModal")}
                    >
                      Close
                    </Button>
                  </div>
                </Modal>*/}
              </Col>
              <Col lg="3" style={style}>
                <CardImg
                  alt="..."
                  src={images.website.questor}
                  style={{ cursor: "pointer" }}
                />
              </Col>
              <Col lg="3" style={style}>
                <CardImg
                  alt="..."
                  src={images.website.kacis}
                  style={{ cursor: "pointer" }}
                />
              </Col>
              <Col lg="3" style={style}>
                <CardImg
                  alt="..."
                  src={images.website.ted}
                  style={{ cursor: "pointer" }}
                />
              </Col>
              <Col lg="12" style={{ marginTop: "30px" }}>
                <NavLink to="/design-portfolio">
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
