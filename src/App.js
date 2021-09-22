import "./App.css";

import Search from "./Search";
import Today from "./Today";
import TodayForecast from "./TodayForecast";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row weather-today">
          <Search />
          <div className="col-1"></div>
          <Today />
          <div className="col-1"></div>
          <TodayForecast />
        </div>
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
