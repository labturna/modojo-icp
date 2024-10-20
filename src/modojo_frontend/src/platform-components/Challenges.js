// src/components/MainContent.js
import React, { useState, useEffect } from 'react';
import BreadcrumbCard from './Breadcrumb';
import Sidebar from './Sidebar';
import BrowserEditor from './Editor';
import LoadingScreen from './LoadingScreen';

const Challenges = () => {
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }
    const handleLessonChange = (newLessonSlug) => {
        // console.log("New lesson selected:", newLessonSlug);
        setSelectedLesson(newLessonSlug); // Update the selected lesson
    };
    const handleSelectLesson = (slug) => {
        setSelectedLesson(slug);
    };


    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 ml-6 overflow-x-hidden w-full max-w-screen-3xl mx-auto">
                <div className="bg-[#1b1027]">
                    <BreadcrumbCard
                        items={[{ label: 'Dashboard', href: '/dashboard' }, { label: 'Challenges', href: '' }]}
                        page={"challenges"}
                        onSelect={handleSelectLesson}
                    />
                    <BrowserEditor selectedLesson={selectedLesson} onLessonChange={handleLessonChange} />
                </div>
            </main>
        </div>
    );
};

export default Challenges;
