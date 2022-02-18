import React, { useState } from "react";
import DictionaryResult from "./DictionaryResult";
import axios from "axios";

export default function SearchEngine() {
  let [keyword, setKeyword] = useState("");
  let [ready, setReady] = useState(false);
  let [dictinaryResponse, setDictionaryRespopnse] = useState("");

  function handleResponse(response) {
    setDictionaryRespopnse(response);
    setReady(true);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  let searchEngine = (
    <div className="SearchEngine">
      <form onChange={updateKeyword}>
        <div className="input-group rounded">
          <input
            type="search"
            className="form-control rounded"
            autoFocus
            placeholder="Search"
          />
          <button className="btn btn-primary" onClick={search}>
            <span className="group-text border-0">
              <i className="fas fa-search"></i>
            </span>
          </button>
        </div>
      </form>
    </div>
  );

  if (ready) {
    return (
      <div className="DictionaryResult">
        {searchEngine}
        <DictionaryResult result={dictinaryResponse} />
      </div>
    );
  } else {
    return searchEngine;
  }
}
