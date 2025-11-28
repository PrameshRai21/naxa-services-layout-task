import React from "react";
import BgImage from "../assets/background.svg";

function Content({ data }) {
  //function extracting content from html elements
  const htmlConverter = (html) => {
    const tempElems = document.createElement("div");
    tempElems.innerHTML = html || "";
    return tempElems.textContent || tempElems.innerHTML || "";
  };

  return (
    <section className="py-6 w-full  lg:py-12">
      <div
        className={`container w-full px-4 mx-auto max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1100px] flex flex-col justify-center ${
          data?.service_order % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
        } `}
      >
        <div className="image_content w-full flex flex-col items-center px-[15px] relative lg:w-[50%]  ">
          <figure>
            <img
              className="max-w-full min-w-[350px] h-unset min-h-[350px] max-h-[400px] lg:max-w-full lg:min-h-[500px] lg:w-[30rem] xl:min-h-[600px]  xl:w-[30rem]"
              src={data?.icon}
              alt=""
            />
          </figure>
        </div>
        <div
          className="text_content w-full flex flex-col items-center justify-center px-[15px] lg:w-[50%] lg:items-start bg-cover  bg-no-repeat"
          style={{ backgroundImage: `url(${BgImage})` }}
        >
          <div className="icon_holder">
            <figure className="mb-4">
              <img
                className="max-w-[50px] max-h-[50px]"
                src={data?.photo}
                alt=""
              />
            </figure>
          </div>
          <div className="title">
            <h1 className="text-[1.5rem] text-darkText mb-5 font-montserrat font-semibold leading-7  text-center md:font-bold lg:font-bold lg:text-left">
              {data?.title}
            </h1>
          </div>
          <div className="description1 text-center font-montserrat my-2.5 text-[.795rem] lg:leading-normal lg:text-left text-darkText ">
            <p>
              We build digital applications to provide digital solutions that
              contribute to efficient data collection and visualization focusing
              mainly on geodata collection and visualization.
            </p>
          </div>
          <div className="description2 bg-[#e9ebff] text-center p-5 font-montserrat my-2.5 text-[.795rem] lg:leading-normal lg:text-left text-black">
            <p>{htmlConverter(data?.description1)}</p>
            <p>{htmlConverter(data?.description2)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
