import React from "react";

import "./Forecast.css";

import DailyForecast from "./DailyForecast";

export default function Forecast() {
  return (
    <div className="forecast">
      <h3 className="forecast-title">5 Day Forecast</h3>
      <div className="row daily-forecast">
        <DailyForecast day="Today" weather="🌤" high={80} low={70} />
        <DailyForecast day="Monday" weather="☀" high={82} low={69} />
        <DailyForecast day="Tuesday" weather="⛅" high={85} low={78} />
        <DailyForecast day="Wednesday" weather="☀" high={90} low={80} />
        <DailyForecast day="Thursday" weather="☁" high={86} low={74} />
        <DailyForecast day="Friday" weather="🌧" high={75} low={65} />
      </div>
    </div>
  );
}
