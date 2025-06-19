import React from "react";
import '../styles.css'

function Header() {
  return (
    <header className="header">
      <img className="logo" src="logo.png" alt="MovieDux Logo" />
      <h2 className="app-subtitle"> It's time for popcorn! Find your next movie here.</h2>
    </header>
  );
}

export default Header;
