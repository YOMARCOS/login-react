import React, { PureComponent } from "react";

import "./footer.css";

class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
        <div className="footer-wrapper">
          <h2>QUERO TRAMPO</h2>
          <span className="footer-copy">&copy;&nbsp;2024</span>
          <div className="footer-navbar">
            <a href="/" className="footer-link">
              Termos de uso
            </a>
            <a href="/" className="footer-link">
              Política de privacidade
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
