import React from 'react';
import '../assets/css/LoadingScreen.css';

const LoadingScreen = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-[#1e1e36]">
            <div className="loader">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    );
};

export default LoadingScreen;