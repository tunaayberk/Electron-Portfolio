import React from "react";

// reactstrap components
import { Badge, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import GeneralFooter from "components/Footers/GeneralFooter.jsx";

// index page sections

import DesignExtended from "components/Content/DesignExtended.jsx";

class DesignPortfolio extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <DesignExtended
            header="Design Works"
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

export default DesignPortfolio;
