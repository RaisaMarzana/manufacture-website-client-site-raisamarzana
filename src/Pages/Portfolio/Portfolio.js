import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div>
            <header class="max-h-full bg-white p-6 grid">
                <div class="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
                    
                    <div class="mt-8 md:mt-0 lg:justify-end col-span-2">
                        <h1 class="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">Hi, I am Raisa Marzana Chowdhury</h1>
                        <p class="text-xl text-gray-800 text-center md:text-left">Address: Sonarpara, Sylhet, Bangaldesh</p>
                        <p class="text-xl text-gray-800 text-center md:text-left">Education: Leading University</p>
                        <p class="text-xl text-gray-800 text-center md:text-left">Email: chowdhuryraisa530@gmail.com</p>
                        <Link to='/' class="w-36 block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-blue-400">LinkedIn</Link>
                    </div>
                </div>
            </header>

            <div class="md:gap-4 p-6 bg-blue-50 md:grid">
                <div class="md:grid grid-cols-2 gap-6 lg:px-40">
                    <div>
                        <div class="bg-white p-4">
                            <div>
                                <div class="mb-4">
                                    <h1 class="text-2xl font-bold text-gray-700">BookStock</h1>
                                </div>

                                <div class="">
                                    
                                    <a href="https://bookstock-e3d76.web.app/">https://bookstock-e3d76.web.app/</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-4 md:mt-0 mt-6">
                        <div>
                            <div class="mb-4">
                                <h1 class="text-2xl font-bold text-gray-700">Beautician</h1>
                               
                            </div>

                            <div class="">
                                
                                <a href="https://independent-service-prov-f4646.web.app/">https://independent-service-prov-f4646.web.app/</a>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white p-4 md:mt-0 mt-6">
                        <div>
                            <div class="mb-4">
                                <h1 class="text-2xl font-bold text-gray-700">Product Analysis</h1>
                               
                            </div>

                            <div class="">
                                
                                <a href="https://product-analysis-raisamarzana.netlify.app/">https://product-analysis-raisamarzana.netlify.app/</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Portfolio;