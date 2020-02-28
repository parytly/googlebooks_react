import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
        <h1> Google Books Search</h1>
        <h4>Search for and Save Books</h4>
      {children}
    </div>
  );
}

export default Jumbotron;