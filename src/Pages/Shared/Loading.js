import React from 'react';

const Loading = () => {
    return (
        <div className="h-screen flex items-center justify-center space-x-2 animate-pulse">
            <div className="w-8 h-8 bg-info rounded-full"></div>
            <div className="w-8 h-8 bg-info rounded-full"></div>
            <div className="w-8 h-8 bg-info rounded-full"></div>
        </div>
    );
};

export default Loading;