import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <React.Fragment>
      <div className="bg-gray py-10">
        <div className="text-center text-white">
          © Logistic {currentYear}. All rights reserved.
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
