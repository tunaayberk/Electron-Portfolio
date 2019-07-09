import React from "react";

// reactstrap components
import { Badge, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import GeneralFooter from "components/Footers/GeneralFooter.jsx";

// index page sections

import WebExtended from "components/Content/WebExtended.jsx";

class WebPortfolio extends React.Component {
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
        <main ref="main">
          <WebExtended
            header="Web Development"
            desc="More than 30 Web Site (WordPress, OpenCart, CMS, HTML)"
          />
        </main>
        <footer className="footer">
          <GeneralFooter />
        </footer>
      </>
    );
  }
}

export default WebPortfolio;
