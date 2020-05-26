import React from "react";

export const Loading = () => {
  return (
    <div className="container grid-md">
      <div className="loading loading-lg"></div>
    </div>
  );
};

export const Error = (props) => {
  return (
    <div className="container grid-md text-center">
      <h2 className="p-2">Opss!!1 {props.error}...</h2>
      <h3 className="p-2">Please try again later.</h3>
    </div>
  );
};
