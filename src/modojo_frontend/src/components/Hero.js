import React from 'react';
import '../assets/css/Hero.css';
import { FaBook, FaTrophy, FaCertificate } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="hero" className="relative text-white min-h-screen pt-20 flex flex-col items-center">
            <div className="container mx-auto text-center relative z-10 px-4">
                <h2 className="text-6xl font-bold mb-4 relative">
                    <span
                        className="word-pull-up mr-2 gradient-shadow"
                        style={{ animationDelay: '0s' }}
                    >
                        Welcome
                    </span>
                    <span
                        className="word-pull-up mr-2 gradient-shadow"
                        style={{ animationDelay: '0.2s' }}
                    >
                        to
                    </span>
                    <span
                        className="word-pull-up gradient-shadow"
                        style={{ animationDelay: '0.4s' }}
                    >
                        MoDojo
                    </span>
                </h2>
                <p className="text-4xl mb-8">Learn Motoko and master the Internet Computer ecosystem.</p>
                <button
                    onClick={() => window.location.href = '/dashboard'}
                    className="shimmer-button bg-[#635985] py-3 px-8 rounded-lg"
                >
                    Get Started
                </button>
                <div className="mt-16 flex flex-col md:flex-row justify-between gap-12">
                    <div className="flex-1 text-right">
                        <h3 className="text-2xl font-semibold mb-4">Platform Features</h3>
                        <ul className="list-disc list-inside space-y-4 text-left">
                            <li className="flex items-center justify-end"><FaBook className="mr-2" /> Interactive Learning Modules</li>
                            <li className="flex items-center justify-end"><FaBook className="mr-2" /> Real-world Projects</li>
                            <li className="flex items-center justify-end"><FaBook className="mr-2" /> Expert Mentorship</li>
                            <li className="flex items-center justify-end"><FaBook className="mr-2" /> Community Support</li>
                        </ul>
                    </div>

                    <div className="flex-1 text-left">
                        <h3 className="text-2xl font-semibold mb-4 ml-6">Earned Badges</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center"><FaTrophy className="mr-2" /> Beginner Badge</li>
                            <li className="flex items-center"><FaTrophy className="mr-2" /> Intermediate Badge</li>
                            <li className="flex items-center"><FaTrophy className="mr-2" /> Expert Badge</li>
                            <li className="flex items-center"><FaCertificate className="mr-2" /> Master Certificate</li>
                        </ul>
                    </div>
                </div>
                <div className="image-gradient mt-16">
                    <img
                        src="/img/modojo.png"
                        alt="MoDojo"
                        className="max-w-full rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
