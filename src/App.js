import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { HashRouter } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app container">
          <Sidebar />
          <Main />
        </div>
      </HashRouter>
    );
  }
}

export default App;
