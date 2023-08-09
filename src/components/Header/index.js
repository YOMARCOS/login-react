import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import "./header.css";

class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          <Link to="/" className="logo">
             <h3>QUERO TRAMPO</h3>
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
