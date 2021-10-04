import React from "react";

const AboutUs = () => {
    return (
        <React.Fragment>
            <div className="my-8">
                <div>
                    <h2 className="text-3xl text-center font-bold">
                        About Us
                    </h2>
                </div>

                <div className="py-8 grid grid-cols-2 gap-6 place-items-start px-20">
                    <div>
                        <img src="/static/images/landing-screen.jpg" />
                    </div>
                    <div className="bg-red px-4  uppercase  text-white">
                        <div className="py-8">
                            <h2 className='text-3xl'>IG Group</h2>
                            <div className='w-36 h-1 bg-white'></div>
                        </div>
                        <div className="py-12">
                            IG Logistics is a part of IG International, the largest importer of fresh fruit in India since 50 years. We shape the world of logistics with a strong determination to connect people and goods through innovative and sustainable logistics solutions. Every day, we go above and beyond to meet the needs of our customers. By anticipating challenges and applying our visionary mindset, we advance global trade and bring communities together.
                            IG Logistics is a part of IG International, the largest importer of fresh fruit in India since 50 years. We shape the world of logistics with a strong determination to connect people and goods through innovative and sustainable logistics solutions.
                        </div>
                        <div className=" mx-auto pb-4">
                            <button className="text-gray-dark font-semibold w-full w-1/2 bg-yellow rounded-md text-white px-4 py-1 my-1 ">
                                Track
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </React.Fragment>
    )
}

export default AboutUs;