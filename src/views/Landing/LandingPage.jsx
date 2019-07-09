import React from "react";

// reactstrap components
import { Badge, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";

// index page sections
import Hero from "views/IndexSections/Hero.jsx";
import Carousel from "views/IndexSections/Carousel.jsx";
import Download from "views/IndexSections/Download.jsx";
import BoxContent from "components/Content/BoxContent.jsx";
import AboutMe from "components/Content/AboutMe.jsx";
import Quote from "components/Content/Quote.jsx";
import Web from "components/Content/Web.jsx";
import Design from "components/Content/Design.jsx";

class LandingPage extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    const img = [
      "assets/img/theme/landing.jpg",
      "assets/img/theme/profile.jpg"
    ];
    return (
      <>
        <DemoNavbar />
        <main ref="main" style={{ marginBottom: "100px" }}>
          <Hero />
          <Quote />
          <AboutMe />
          <BoxContent />
          <Web
            header="Web Development"
            desc="More than 30 Web Site (WordPress, OpenCart, CMS, HTML)"
          />
          <Design
            header="Design"
            desc="More than 50 Customer (Flyer, Brochure, Business Card, Mailing, Social Media Contents)"
          />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default LandingPage;
