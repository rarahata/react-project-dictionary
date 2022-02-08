import React from "react";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <form>
        <div class="input-group rounded">
          <input
            type="search"
            class="form-control rounded"
            autoFocus
            placeholder="Search"
          />
          <button className="btn">
            <span class="group-text border-0">
              <i class="fas fa-search"></i>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
