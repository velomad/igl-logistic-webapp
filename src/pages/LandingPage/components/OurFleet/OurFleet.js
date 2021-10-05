import React from "react";
import SliderContent from "./SliderContent";
import { Slider } from "../../../../components";
import {
  truck1,
  truck2,
  truck3,
  truck4,
  truck5
} from "../../../../assets/images";

const OurFleet = () => {
  return (
    <React.Fragment>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto py-10 flex px-5 md:flex-row flex-col items-start">
          <div class="w-full mb-6 lg:mb-0 py-4">
            <div className="w-52 h-1 bg-yellow "></div>
            <div className="flex flex-row items-start py-4">
              <h1 class="sm:text-3xl text-2xl font-bold title-font mb-2 text-white">
                Our Fleets
              </h1>
              <div className="ml-40 w-96">
                <p className="text-sm text-white font-bold">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-yellow-200 shadow-lg">
          <div className="py-10 px-20 relative slider-container ">
            <Slider
              navigateArrowColor="text-gray-900"
              spaceBetween={20}
              isNavigation={true}
              spaceBetweenDesktop={20}
              ItemRender={SliderContent}
              slidesPerView={3}
              slidesPerViewDesktop={3}
              slidesPerViewTab={3}
              slides={[
                { image: truck1 },
                { image: truck2 },
                { image: truck3 },
                { image: truck4 },
                { image: truck5 }
              ]}
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default OurFleet;
