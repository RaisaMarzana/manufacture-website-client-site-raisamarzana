import React from 'react';

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-hero-pattern">
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">The best Car Parts in the World</h1>
                    <p className="mb-5 text-3xl">You can order any custom quantity to manufacture</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;