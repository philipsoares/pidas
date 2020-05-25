import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <div className="d-flex container grid-md">
        <div className="logo">
          <Link
            to={{
              pathname: "/",
            }}
          >
            pidas.dev
          </Link>
        </div>
        <nav>
          {props.tags.data.map((item) => (
            <Link
              to={{
                pathname: item.attributes.path.alias,
              }}
              key={item.id}
            >
              {item.attributes.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
