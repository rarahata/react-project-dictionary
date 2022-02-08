import React from "react";
import SearchEngine from "./SearchEngine";
import "./DictionaryApp.css";
import logo from "./logo.png";

export default function DictionaryApp() {
  return (
    <div className="DictionaryApp">
      <div className="container">
        <img src={logo} alt="logo" className="App-logo img-fluid" />
        <SearchEngine />
      </div>
    </div>
  );
}
