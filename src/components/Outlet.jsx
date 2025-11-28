import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import { useSelector } from "react-redux";

function Outlet() {
  const datas = useSelector((state) => state.services);

  //sorting data according service_order
  const services = datas.data
    ? [...datas.data].sort((a, b) => a.service_order - b.service_order)
    : "";
  return (
    <>
      <div className="main scroll-smooth px-2 lg:px-5 bg-[#f4f4f4]">
        <Banner />
        <div>
          {services.map((service) => (
            <Content key={service.id} data={service} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Outlet;
