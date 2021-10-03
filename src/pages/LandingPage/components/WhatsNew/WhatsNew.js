import React from 'react';

const WhatsNew = () => {
    return (
        <React.Fragment>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 md:flex-row flex-col items-start">
                    <div class="w-full mb-6 lg:mb-0">
                        <h1 class="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">What's New...</h1>
                    </div>
                </div>
                <div className='px-20 py-10 slider-container flex flex-row justify-between items-center'>
                    {/* <Slider
                        spaceBetween={20}
                        isNavigation={false}
                        spaceBetweenDesktop={20}
                        ItemRender={Clinic}
                        slidesPerView={1}
                        slidesPerViewDesktop={5}
                        slidesPerViewTab={3}
                        slides={[...new Array(4)]}
                    /> */}
                    {
                        [...new Array(3)].map((el, index) => {
                            return (
                                <div class="p-4 w-full">
                                    <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                        <div class="flex items-center mb-3">
                                            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                            </div>
                                            <h2 class="text-gray-900 text-lg title-font font-medium">The Catalyzer</h2>
                                        </div>
                                        <div class="flex-grow">
                                            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </React.Fragment >
    )
}

export default WhatsNew;