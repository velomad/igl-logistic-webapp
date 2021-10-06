import React from "react";
import { Card, InputField, Dropdown } from "../../../../components";

const VehicalAvailability = () => {
  return (
    <div>
      <div className="bg-yellow py-4 rounded-lg ">
        <div className="text-gray-dark text-center uppercase">
          <h2 className="capitalize">Today's vehicles availability for cargo</h2>
        </div>

        <div className="flex justify-center py-4 px-40 space-x-4 items-end">
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

          <button className="w-full bg-red rounded-md text-white px-4 py-1 my-1 ">
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicalAvailability;
