import React from "react";

import twitter from "../icons/twitter.svg";
import linkedin from "../icons/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="d-flex container grid-md">
        <div className="logo">Pidas.Dev</div>
        <p className="text-gray">
          Desenvolvido por Philip Soares com Drupal e React
        </p>
        <div>
          <img srcSet={twitter} alt="Logo" />
          <img srcSet={linkedin} alt="Logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
