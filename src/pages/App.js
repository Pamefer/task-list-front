import React from "react";
import { BrowserRouter } from "react-router-dom";
// import "../styles/App.css";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import Router from "../router.js";

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <BrowserRouter history={history}>
        <Header />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
