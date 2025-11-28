import React from "react";
import BgImage from "../assets/5f2e7ab4fc673af02b45eed51bf5cb5e.jpg";

function Banner() {
  return (
    <>
      <section
        className=" bg-contain bg-white bg-no-repeat bg-right relative overflow-hidden block box-border min-h-[620px] xl:min-h-[530px]"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div className="banner-caption mx-11 top-7 flex flex-row justify-start items-center absolute h-full w-full box-border z-100 right-0 left-0 xl:top-11">
          <div className="container w-full px-4 mx-auto box-border block max-w-xl md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1200px]">
            <div className="caption-content max-w-[80%] block xl:max-w-[750px]">
              <h2 className="text-sm uppercase text-[#ffab00] mb-[25px] font-semibold relative leading-1.5 block font-montserrat">
                Services
              </h2>
              <h1 className="text-darkText text-[40px] font-montserrat leading-[1.1] block">
                At <span className="text-blueText">NAXA</span>, we work on
                <span className="text-blueText"> ideas</span>; ideas that can
                provide <span className="text-blueText">simple solutions</span>{" "}
                to <span className="text-blueText">complex problems</span>.
              </h1>
              <p className="text-darkText font-montserrat font-semibold text-left mt-10 mb-[30px] text-[.875rem]  xl:leading-[1.4rem]  xl:max-w-[650px] ">
                We work as a team to generate, explore, build and validate
                ideas. We also contextualize innovations around the world to
                find the best fitting solutions to local problems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
