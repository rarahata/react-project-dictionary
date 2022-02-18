import React from "react";
import SearchEngine from "./SearchEngine";
import "./DictionaryApp.css";
import logo from "./logo.png";

export default function DictionaryApp() {
  return (
    <div className="DictionaryApp">
      <h1>Dictionary</h1>
      <SearchEngine />
    </div>
  );
}
