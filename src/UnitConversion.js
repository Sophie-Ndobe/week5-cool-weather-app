import React, { useState } from "react";
import "./UnitConversion.css";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("metric");

  function convertToEmperial(event) {
    event.preventDefault();
    setUnit("emperial");
  }

  function convertToMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }

  if (unit === "metric") {
    return (
      <span className="UnitConversion">
        <span className="temperature">{props.mainTemp}</span>
        <span className="units">
          <span>°C</span> |{" "}
          <span>
            <a href="/" onClick={convertToEmperial}>
              °F
            </a>
          </span>
        </span>
      </span>
    );
  } else {
    let fahrenheitTemperature = Math.round((props.mainTemp *9/5) + 32);
    return (
      <span className="UnitConversion">
        <span className="temperature">{fahrenheitTemperature}</span>
        <span className="units">
          <span>
            <a href="/" onClick={convertToMetric}>
              °C
            </a>
          </span>{" "}
          | <span>°F</span>
        </span>
      </span>
    );
  }
}
