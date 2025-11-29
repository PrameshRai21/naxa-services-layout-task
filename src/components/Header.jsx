import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import logo from "../assets/naxa_logo.png";

function Header() {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    console.log(visibility);
  }, [visibility]);

  const navLinks = [
    "About Us",
    "Services",
    "Portfolio",
    "Company",
    "Our Initiatives",
    "Events & Media",
  ];
  return (
    <>
      <div className="header_container font-montserrat z-1000">
        <div className="head_banner bg-yellowBg mb-1.5">
          <a href="#">
            <p className="text-center text-[12px] text-darkText font-semibold underline py-2 transition-colors duration-200 hover:cursor-pointer hover:text-blueText">
              Checkout our pioneering GEO AI products for intelligent spatial
              solutions
            </p>
          </a>
        </div>
        <div className="nav_container mx-20 px-3.5 flex flex-row justify-around items-center ">
          <a href="#" className="company_logo max-w-[110px] ">
            <img
              className="max-w-full min-w-[100px] h-auto hover:cursor-pointer "
              src={logo}
              alt=""
            />
          </a>
          <div className="nav_section hidden lg:block">
            <div className="nav">
              <ul className="flex flex-row justify-center items-center text-[0.785rem] text-darkText font-medium">
                {navLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="px-6 py-3.5 flex justify-center transition-colors duration-200 hover:cursor-pointer hover:text-blueText"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <a href="#" className="lets_talk_btn">
            <button className="bg-yellowBg w-34  text-blueText text-[0.785rem] font-medium px-6 py-2 transition-all duration-200  hover:cursor-pointer hover:bg-amber-500">
              Let's talk
            </button>
          </a>
          {/* Hamburger button */}
          <div className="hamburger_button">
            <button
              onClick={() => setVisibility((visibility) => !visibility)}
              className={`block lg:hidden ${visibility ? "hidden" : "block"}`}
            >
              <GiHamburgerMenu className="text-yellowBg text-3xl" />
            </button>
          </div>
        </div>
        {/* For small screens */}
        <div className="mobile_view ">
          {visibility ? (
            <div
              className={`nav z-1000 h-full fixed top-0 right-0 w-[50%] bg-yellowBg
                    ${visibility ? "translate-x-0" : "translate-x-full"}`}
            >
              <div className="Cross_button w-full pr-5 flex justify-end mb-5">
                <button onClick={() => setVisibility(false)}>
                  <RxCross2 className="text-blueText text-3xl" />
                </button>
              </div>
              <ul className="flex flex-col text-[0.785rem] text-darkText font-medium">
                {navLinks.map((item) => (
                  <li key={item} onClick={() => setVisibility(false)}>
                    <a
                      href="#"
                      className="px-6 py-3.5 flex justify-start transition-colors duration-200 hover:cursor-pointer hover:text-blueText"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
