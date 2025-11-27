import "./App.css";
import React from "react";

function App() {
  const map_key = import.meta.env.VITE_MAPLIBRE_KEY;
  console.log(map_key);

  return (
    <>
      <h1 className="text-2xl">Hello</h1>
    </>
  );
}

export default App;
