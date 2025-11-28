import React from "react";

function Content() {
  return (
    <section className="py-24 ">
      <div className="container w-full px-4 mx-auto max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1100px] flex flex-col lg:flex-row ">
        <div className="image_content w-full flex flex-col items-center px-[15px] relative lg:w-[50%]  ">
          <figure>
            <img
              className="max-w-full h-auto lg:max-w-full lg:h-[500px]"
              src="https://admin.naxa.com.np/media/pics/Service-img-1.png"
              alt=""
            />
          </figure>
        </div>
        <div className="text_content w-full flex flex-col items-center lg:w-[50%] lg:items-start">
          <div className="icon_holder">
            <figure className="mb-4">
              <img
                className="max-w-[50px] max-h-[50px]"
                src="https://admin.naxa.com.np/media/pics/Services-icon5.svg"
                alt=""
              />
            </figure>
          </div>
          <div className="title">
            <h1 className="text-[1.5rem] text-darkText mb-5 font-montserrat font-semibold leading-7  text-center md:font-bold lg:font-bold lg:text-left">
              Software & Apps Development
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
            <p>
              We develop digital software solutions ensuring smooth performances
              and user experiences across all modern platforms and devices.
              Whether it's a digital application for a private organization or a
              set of software solutions for development organizations, we offer
              support for the full lifecycle of the software development process
              that includes system design, development, testing, deployment,
              handover, and support, these activities are conducted with
              world-class product design and development practices. Our services
              include building custom Android and iOS applications, web
              applications, and tools. We are particularly strong in customizing
              open-source applications such as ODKCollect and KoboCollect and
              building advanced GIS Applications. We specialize in delivering
              large-scale projects in challenging environments on short
              timelines. We build products that allow efficient data management,
              aid in e-governance, and data analysis, visualization of both
              spatial and demographic datasets by integrating open standards,
              and advanced software development frameworks and tools. This has
              allowed our customers to make informed data-driven decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
