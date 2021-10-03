import React from 'react';

const WhatClientSay = () => {
    return (
        <React.Fragment>
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-5">
                    <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">What Clients Say</h1>
                </div>
                <section class="text-gray-600 body-font">
                    <div class="px-40 py-10 mx-auto">
                        <div class="flex flex-row justify-between -m-4 items-center space-x-4">
                            {
                                [...new Array(3)].map((el, index) => {
                                    return (
                                        <div key={index} class="w-full lg:mb-0 mb-6 p-4 mx-auto bg-gray-100 rounded-md">
                                            <div class="h-full text-center">
                                                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302" />
                                                <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                                <p class="text-gray-500">Senior Product Designer</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
}

export default WhatClientSay;