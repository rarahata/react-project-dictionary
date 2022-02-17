import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    alert(response.data[0].word);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/sunset";
    axios.get(apiUrl).then(handleResponse);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
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
}
