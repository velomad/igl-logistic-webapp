import React from "react";

const HomeBanner = () => {
    return (
        <React.Fragment>
            <div class="w-full bg-white  px-5 py-16">
                <div class="w-full max-w-6xl mx-auto p-10 bg-yellow rounded">
                    <div class="-mx-3 flex flex-row justify-between items-center">
                        <div class="px-3 md:w-2/3 mb-10 md:mb-0">
                            <h1 class="text-4xl md:text-4xl font-bold leading-tight">Isn't in yet...</h1>
                        </div>
                        <div class="px-3 w-full">
                            <form className='flex flex-row justify-end items-center space-x-2'>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="email@example.com" />
                                </div>
                                <div>
                                    <button class=" w-full bg-red hover:bg-indigo-700 focus:bg-indigo-700 transition-colors text-white rounded-lg px-7 py-2 font-semibold">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HomeBanner;