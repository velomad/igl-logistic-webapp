import React from "react";

const SliderContent = ({ image }) => {
  return (
    <div class="rounded-lg h-64 overflow-hidden flex items-center ">
      <img alt="content" class="object-fit object-center" src={image} />
    </div>
  );
};

export default SliderContent;
