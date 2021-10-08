import React from "react";

export default function TemperatureUnits(props) {
  return (
    <span className="TemperatureUnits">
      <span className="temp-now">{Math.round(props.fahrenheit)}</span>
      <span className="units"> °F</span>
    </span>
  );
}
