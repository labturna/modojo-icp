// src/components/MainContent.js
import React, { useState } from 'react';
import BreadcrumbCard from './Breadcrumb';
import BrowserEditor from './Editor';

const MainContent = () => {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const handleLessonChange = (newLessonSlug) => {
  setSelectedLesson(newLessonSlug); 
};
  const handleSelectLesson = (slug) => {
    setSelectedLesson(slug);
  };

  return (
    <div className="bg-[#1b1027]">
      <BreadcrumbCard 
        items={[{ label: 'Dashboard', href: '/dashboard' }, { label: 'Practice', href: '' }]} 
        page={"practice"}
        onSelect={handleSelectLesson}
      />
      <BrowserEditor selectedLesson={selectedLesson} onLessonChange={handleLessonChange} pageType="practice" />
    </div>
  );
};

export default MainContent;
