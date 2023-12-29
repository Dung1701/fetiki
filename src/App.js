import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import HeaderComponent from "./Components/Header";
import FooterComponent from "./Components/Footer";
import Routers from "./router";
function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routers />
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}
export default App;
