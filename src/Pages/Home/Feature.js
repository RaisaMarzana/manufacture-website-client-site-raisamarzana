import React from 'react';

const Feature = () => {
    return (
        <section class="text-gray-600 body-font">
            <h1 className='text-center text-4xl'>Top ordered</h1>
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/3">
                        <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                            <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://i.ibb.co/pvsmCMT/car2.jpg" alt="blog" />
                            <div class="p-6">
                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Wheels</h2>
                                <h1 class="title-font text-lg font-medium text-gray-600 mb-3">The Wheel</h1>
                                <p class="leading-relaxed mb-3">Best Car parts in the world. We manufacture the best.</p>
                                <div class="flex items-center flex-wrap ">
                                    <button class="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Learn more</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
                            <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://i.ibb.co/xj8Tg3g/car6.jpg" alt="blog" />
                            <div class="p-6">
                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Headlights</h2>
                                <h1 class="title-font text-lg font-medium text-gray-600 mb-3">The Headlights</h1>
                                <p class="leading-relaxed mb-3">Best Car parts in the world. We manufacture the best</p>
                                <div class="flex items-center flex-wrap ">
                                    <button class="bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">Learn more</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                            <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://i.ibb.co/sq8JG8b/car1.jpg" alt="blog" />
                            <div class="p-6">
                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Engine</h2>
                                <h1 class="title-font text-lg font-medium text-gray-600 mb-3">The Engine</h1>
                                <p class="leading-relaxed mb-3">Best Car parts in the world. We manufacture the best</p>
                                <div class="flex items-center flex-wrap ">
                                    <button class="bg-gradient-to-r from-fuchsia-300 to-pink-400 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg">Learn more</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;