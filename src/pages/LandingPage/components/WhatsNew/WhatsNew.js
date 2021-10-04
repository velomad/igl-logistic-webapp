import React from "react";
import SliderContent from "./SliderContent";
import { Slider } from "../../../../components";

const WhatsNew = () => {
  return (
    <React.Fragment>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 md:flex-row flex-col items-start">
          <div class="w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">
              What's New...
            </h1>
          </div>
        </div>
        <div className=" py-10 px-20 relative slider-container ">
          <Slider
            spaceBetween={20}
            isNavigation={true}
            spaceBetweenDesktop={20}
            ItemRender={SliderContent}
            slidesPerView={3}
            slidesPerViewDesktop={3}
            slidesPerViewTab={3}
            slides={[...new Array(6)]}
          />
          {/* {[...new Array(3)].map((el, index) => {
            return (
              
            );
          })} */}
        </div>
      </section>
    </React.Fragment>
  );
};

export default WhatsNew;
