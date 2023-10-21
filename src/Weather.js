import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather mt-5">
      <div className="row">
        <div className="col-6">
          <h1>San Francisco</h1>
          <ul>
            <li>Saturday 11:42, few clouds</li>
            <li>
              Humidity: <strong>86%</strong>, Wind: <strong>2.68km/h</strong>{" "}
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-end temperatureDetails">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Partly Cloudy"
            />
            <h2>32</h2>
            <span className="units">
              <span>°C</span>|<span>°F</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
