import React from "react";
import "./UnitConversion.css";

export default function UnitConversion() {
  return (
    <span className="UnitConversion">
      <span className="temperature">18</span>
      <span className="units">
        <span>°C</span> | <span>°F</span>
      </span>
    </span>
  );
}
