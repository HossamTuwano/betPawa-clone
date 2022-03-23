import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import "../Header.css";

function Header() {
  return (
    <div className="header__container">
      <header className="header-hidden-wrapper">
        <div className="header-hidden__nav">
          <div className="header-hidden__buttons-left">
            <MenuIcon className="header-hidden__menuicon header-hidden__icons" />
            <button className="header-hidden__btn">SPORT</button>
            <button className="header-hidden__btn">VURTUAL</button>
            <button className="header-hidden__btn">JACKPOT</button>
          </div>

          <div className="header-hidden__icons-right">
            <SearchIcon className="header-hidden__search-icon header-hidden__icons" />
            <button className="header-hidden__btn">MENU</button>
            <SportsSoccerIcon className="header-hidden__sports-soccer-icon header-hidden__icons" />
          </div>
        </div>

        <div className="header-hidden__registration">
          <div className="header-hidden__logo">
            {/* <img src="" alt="logo" /> */}
          </div>
          <div className="header-hidden__registration-buttons">
            <button className="header-hidden__registration-login btn">
              LOGIN
            </button>
            <button className="header-hidden__registration-join btn">
              JOIN NOW
            </button>
          </div>
        </div>
      </header>
      <div className="header_desktop">
        <header className="header">
          <div className="navigation">
            <div className="nav-flex">
              <div className="logo">
                <img src="logo.png" alt="" />
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
                <button className="btn join">JOIN NOW</button>
                <button className="btn">MENU</button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
