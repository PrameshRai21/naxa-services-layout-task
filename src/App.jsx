import "./App.css";
import React from "react";
import Banner from "./components/Banner";
import Content from "./components/Content";

function App() {
  // const map_key = import.meta.env.VITE_MAPLIBRE_KEY;
  // console.log(map_key);

  return (
    <div className="main scroll-smooth px-5 bg-[#f4f4f4]">
      <Banner />
      <Content />
    </div>
  );
}

export default App;
