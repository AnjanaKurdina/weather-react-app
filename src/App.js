import "./App.css";
import Footer from "./Footer";
import Today from "./Today";
import TodayForecast from "./TodayForecast";
import Forecast from "./Forecast";

import Search from "./Search";

export default function App(props) {
  return (
    <div className="App">
      <div className="container">
        <div className="row weather-today">
          <Search defaultCity="New York" />
          <div className="col-1"></div>
          <Today data={props.weatherData} />
          <div className="col-1"></div>
          <TodayForecast />
          <Forecast />
          <Footer />
        </div>
      </div>
    </div>
  );
}
