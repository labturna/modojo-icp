// src/components/MainContent.js
import React, { useState } from 'react';
import BreadcrumbCard from './Breadcrumb';
import Sidebar from './Sidebar';
import BrowserEditor from './Editor';
const Challenges = () => {
    const [selectedLesson, setSelectedLesson] = useState(null);
    const handleLessonChange = (newLessonSlug) => {
        console.log("New lesson selected:", newLessonSlug);
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
