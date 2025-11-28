import "./App.css";
import React from "react";
import Banner from "./components/Banner";

function App() {
  // const map_key = import.meta.env.VITE_MAPLIBRE_KEY;
  // console.log(map_key);

  return (
    <div className="main scroll-smooth">
      <Banner />
    </div>
  );
}

export default App;
