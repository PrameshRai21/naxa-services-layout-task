import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getServicesData } from "./services/serviceApi.js";
import { setServices } from "./features/serviceSlice";
import Outlet from "./components/Outlet";

function App() {
  const dispatch = useDispatch();
  const { data } = getServicesData();

  useEffect(() => {
    if (data) dispatch(setServices(data));
  }, [data]);

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
