import React from "react";
import { YearsOfExp, AnnuallyDelivery, Solutions, Statistics, Testimonials } from './components';
const LandingPage = () => {
  return (
    <React.Fragment>
      <div className='space-y-24'>
        <section>
          <div class="w-full bg-cover bg-center" style={{ height: '35rem', backgroundImage: 'url(/static/images/landing-screen.jpg)' }}>
            <div class="flex items-center justify-start h-full w-full bg-gray-900 bg-opacity-50 sm:px-24">
              <div class="text-center sm:text-left">
                <h1 class="text-yellow-300 text-2xl font-semibold uppercase md:text-4xl">Quick Reliable, Hamesha</h1>
                <h1 class="text-white text-xl mt-2 font-semibold md:text-lg sm:w-96">Your ultimate travel companion. Carries all the information you need while travelling</h1>
                <div class="get-app flex space-x-5 mt-10 justify-center md:justify-start">
                  <button class="apple bg-red-600 text-white shadow-xl px-7 py-2 rounded-lg flex items-center space-x-2">
                    <div class="text">
                      <p class="text-sm font-bold text-gray-900">Track Your <br /> Shipment</p>
                    </div>
                  </button>
                  <button class="google bg-white shadow-xl px-7 py-2 rounded-lg flex items-center space-x-4">
                    <div class="text">
                      <p class="text-sm font-bold text-gray-900">Book Now</p>
                    </div>
                  </button>
                </div>
                <div class="bg-white shadow p-2 flex rounded-md mt-10 mx-10 sm:mx-0">
                  <span class="w-auto flex justify-end items-center text-gray-500 p-2">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                  </span>
                  <input class="w-full rounded p-2" type="text" placeholder="Try 'Tracking ID'" />
                  <button class="bg-red-600 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4">
                    <p class="font-semibold text-xs">Search</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <YearsOfExp />
        </section>
        <section>
          <AnnuallyDelivery />
        </section>
        <section>
          <Solutions />
        </section>
        <section>
          <Statistics />
        </section>
        <section>
          <Testimonials />
        </section>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
