import React from "react";
import { Dropdown, InputField } from "../../components";
import {
  AboutUs,
  OurFleet,
  WhyUs,
  WhatClientSay,
  HomeBanner
} from "./components";
const LandingPage = () => {
  return (
    <React.Fragment>
      <section className="">
        <div
          style={{
            backgroundImage: `url('/static/images/landing-image.png')`,
            backgroundRepeat: "repeat-y",
            backgroundSize: "cover",
            width: "100%"
          }}
        >
          <div className="flex justify-between px-10 py-10 pb-40">
            <div>
              <div>
                <h1 className="text-white pb-4">Quick Reliable, Hamesha</h1>
                <hr className="w-1/2 mx-auto border-2 border-yellow" />
              </div>
            </div>
            <div className="relative py-2">
              <div className="absolute py-2 px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <div className="absolute right-0 px-2">
                <button className="bg-red rounded-md text-white px-4 py-1 my-1 ">
                  Track
                </button>
              </div>
              <input
                type="search"
                placeholder="Track Now"
                className="bg-gray-light rounded-md border border-gray py-2 px-9 w-96"
              />
            </div>
          </div>

          <div className="bg-yellow py-4">
            <div className="text-gray-dark text-center uppercase">
              <h2>Best logistics service here</h2>
            </div>

            <div className="px-4 grid grid-cols-7 py-4 gap-4 place-items-center  items-end ">
              <div className="w-full">
                <Dropdown
                  label="pickup location"
                  options={["option 1", "option 2"]}
                />
              </div>
              <div className="w-full">
                <Dropdown
                  label="Drop off location"
                  options={["option 1", "option 2"]}
                />
              </div>
              <div className="w-full">
                <InputField label="Departure Date" type="date" />
              </div>
              <div className="w-full">
                <Dropdown
                  label="Product Category"
                  options={["option 1", "option 2"]}
                />
              </div>
              <div className="w-full">
                <Dropdown label="Weight" options={["option 1", "option 2"]} />
              </div>
              <div className="w-full">
                <Dropdown label="Vehicle" options={["option 1", "option 2"]} />
              </div>
              <div className="w-full mx-auto">
                {" "}
                <button className=" bg-red rounded-md text-white px-4 py-1 my-1 ">
                  Get Quote
                </button>
              </div>
            </div>
          </div>

          <div className="py-20 text-center">
            <h1 className="text-white uppercase">
              50 Years of experience in handling perishables
            </h1>
          </div>

          <div className="bg-yellow py-4">
            <div className="text-gray-dark text-center uppercase">
              <h2 className="uppercase">
                Todays vehicles availability for cargo
              </h2>
            </div>

            <div className="px-4 flex justify-center px-20 space-x-8 items-end ">
              <div className="w-full">
                <Dropdown
                  label="pickup location"
                  options={["option 1", "option 2"]}
                />
              </div>
              <div className="w-full">
                <Dropdown label="Vehicle" options={["option 1", "option 2"]} />
              </div>
              <div className="w-full">
                <Dropdown
                  label="Drop off location"
                  options={["option 1", "option 2"]}
                />
              </div>
              <div className="w-full mx-auto">
                {" "}
                <button className=" bg-red rounded-md text-white px-4 py-1 my-1 ">
                  Contact Now
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <AboutUs /> */}
        <div className="bg-gray-dark">
          <OurFleet />
        </div>
        <div className="bg-gray-lightest py-14">
          <WhyUs />
        </div>
        {/* <WhatClientSay /> */}
        <HomeBanner />
      </section>
    </React.Fragment>
  );
};

export default LandingPage;
