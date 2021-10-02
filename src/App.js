import "./App.css";

import Search from "./Search";
import Footer from "./Footer";

export default function App(props) {
  return (
    <div className="App">
      <Search defaultCity="New York" />
      <Footer />
    </div>
  );
}
