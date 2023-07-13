import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FullPage } from "./structures/FullPage";
import { Appbar } from "./structures/appbar/Appbar";
import { Home } from "./structures/sections/Home";

function App() {
  return (
    <FullPage>
      <Appbar />
      <Home />
    </FullPage>
  );
}

export default App;
