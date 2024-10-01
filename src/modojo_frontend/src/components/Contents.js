import React, { useRef } from 'react';
import '../assets/css/Courses.css'; // Import the CSS file
import contentData from '../assets/json/content.json'; // Import your JSON file

const Contents = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section id="contents" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Content Highlights</h2>
        <p className="text-lg mb-8 text-white">
          Explore the latest content, articles, and resources available on MoDojo to enhance your learning experience.
        </p>
        <div className="relative">
          {/* Scroll Container */}
          <div ref={scrollRef} className="scroll-container flex overflow-hidden py-4">
            {/* Dynamic Card Rendering based on JSON content */}
            {contentData.courses.map((course, index) => (
              <div key={index} className="animate-border card-content w-80 flex-none">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <button className="shimmer-button">
                  <span>Go to Course</span>
                </button>
              </div>
            ))}
          </div>
          {/* Scroll Buttons */}
          <button className="scroll-button left" onClick={scrollLeft}>
            &#9664; {/* Left arrow icon */}
          </button>
          <button className="scroll-button right" onClick={scrollRight}>
            &#9654; {/* Right arrow icon */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contents;
