import React from "react";
import SearchIcon from "@material-ui/icons/Search";
function Header() {
  return (
    <div>
      <header className="header">
        <div className="navigation">
          <div className="nav-flex">
            <div className="logo">
              <img src="" alt="logo" />
            </div>
            <div className="search-bar">
              <div className="search-input">
                <input
                  type="text"
                  placeholder="search for events and tournaments..."
                  className="search"
                />
              </div>
              <div className="search-icon">
                <i className="icon-wrapper">
                  <SearchIcon className="icon" />
                </i>
              </div>
            </div>
            <div className="buttons">
              <button className="btn">Login</button>
              <button className="btn">JOIN NOW</button>
              <button className="btn">MENU</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
