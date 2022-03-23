import React from "react";
import Header from "./components/Header";
import "./App.css";
import SidebarLeft from "./components/SidebarLeft";
import Main from "./components/Main";
import SidebarRight from "./components/SidebarRight";
import MainDesktop from "./components/MainDesktop";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="main-mobile">
          <Main />
        </div>

        <div className="main-web">
          <SidebarLeft />
          <MainDesktop />
          <SidebarRight />
        </div>
      </div>
    </div>
  );
}

export default App;
