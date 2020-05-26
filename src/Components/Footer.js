import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="d-flex container grid-md">
        <div className="logo">pidas.dev</div>
        <p>Desenvolvido por Philip Soares com Drupal e React</p>
        <div>
          <a
            href="https://twitter.com/philipsoares"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/philipsoares/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
