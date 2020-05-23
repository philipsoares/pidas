import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="d-flex container grid-md">
        <div className="logo">
          <a href="/">Pidas.Dev</a>
        </div>
        <nav>
          <a href="/html/">HTML</a>
          <a href="/css/">CSS</a>
          <a href="/js/">JavaScript</a>
          <a href="/jquery/">jQuery</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
