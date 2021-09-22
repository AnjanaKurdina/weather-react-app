import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="col-3 Search">
      <form>
        <input
          type="input"
          placeholder="Enter City Name"
          className="enter-search"
          autoFocus
          autoComplete="off"
        />
        <br />
        <button type="submit" className="btn btn-primary">
          City Search
        </button>
      </form>

      <button type="button" className="btn btn-primary">
        Current Location
      </button>
    </div>
  );
}
