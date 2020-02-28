import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
        <a className="navbar-brand col-4" href="/">
        Google Books
      </a>
      {/* <a className="text-white col-4" href="/">Searched</a> */}
      <a className="text-white col-2" href="/">Saved Books</a>
        </div>

    </nav>
  );
}

export default Nav;