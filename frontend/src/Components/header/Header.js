import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
	const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/" className="link">
          {" "}
          <h1 className="header__title">CodeNotes</h1>{" "}
        </Link>
        <div className="header__links">
          <i class={`uil uil-bars ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}></i>
          <ul className={`header__links-ul ${isOpen && "open"}`}>
            <li>
              <Link to="/" className="link" onClick={() => setIsOpen(!isOpen)}>
                All Notes
              </Link>
            </li>
            <li>
              <Link to="/addnote" className={`link ${isOpen && "open"}`}  onClick={() => setIsOpen(!isOpen)}>
                Add Note
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
