import React from 'react';

const AnnuallyDelivery = () => {
    return (
        <React.Fragment>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 md:flex-row flex-col items-start">
                    <div class="mb-5 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left sm:mb-16 md:mb-0 items-center text-center">
                        <div class="flex flex-wrap w-full mb-3 sm:mb-20">
                            <div class="w-full mb-6 lg:mb-0">
                                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Annually Delivering</h1>
                                <div class="mx-auto sm:mx-0 h-1 w-20 bg-indigo-500 rounded"></div>
                            </div>
                        </div>
                        <h1 class="title-font text-xl sm:text-2xl mb-4 font-medium text-gray-900">Annually Delivering over 80,000 MT to the Right Place at the Right Time at their Optimal Temperatures
                        </h1>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-full">
                        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x400" />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default AnnuallyDelivery;