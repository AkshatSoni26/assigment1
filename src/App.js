import React from "react";
import "./App.css";
import SideBar from "./components/sidebar/SideBar.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./components/main/Main.jsx";

function App() {
  return (
    <div className="main">
      <SideBar />
      <div>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
