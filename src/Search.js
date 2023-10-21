import React, { useState } from "react";
import "./Search.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function Search() {
  const [city, setCity] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
    alert(city);
  }

  function cityUpdates(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city name..."
              className="form-control"
              onChange={cityUpdates}
            />
          </div>
          <div className="col-3">
            <button className="btn btn-primary w-100">Search</button>
          </div>
        </div>
      </form>
      <Weather />
      <Footer />
    </div>
  );
}
