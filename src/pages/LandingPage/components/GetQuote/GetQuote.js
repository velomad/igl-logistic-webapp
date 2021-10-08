import React from "react";
import { Dropdown, Card, InputField } from "../../../../components";

const GetQuote = () => {
  return (
    <div>
      <div className="bg-gray-lightest py-2 rounded-lg">
        <div className="text-gray-dark text-center capitalize">
          <h2>Best logistics service here</h2>
        </div>

        <div className="md:flex space-y-4 md:space-x-4 py-4 px-4 items-end justify-around">
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
            <InputField label="Departure Date" placeholder="date" type="date" />
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
          <div className="w-full ">
            <Dropdown label="Vehicle" options={["option 1", "option 2"]} />
          </div>
          <button className="w-full bg-red rounded-md text-white px-4 py-1.5 my-1 ">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
