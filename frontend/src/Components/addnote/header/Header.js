import React from "react";
import { Link } from "react-router-dom";
import "./header.css"

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
	  <Link to="/" className="link"> <h1 className="header__title">CodeNotes</h1> </Link>
	  <div className="header__links">
		<ul>
			<li><Link to="/" className="link">All Notes</Link></li>
			<li><Link to="/addnote" className="link">Add Note</Link></li>
		</ul>
	  </div>
	  </div>
    </header>
  );
}

export default Header;
