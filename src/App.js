import "./App.css";

import Weather from "./Weather";
import Footer from "./Footer";

export default function App(props) {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <Footer />
    </div>
  );
}
