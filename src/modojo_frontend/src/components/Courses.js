import React from 'react';
import '../assets/css/Courses.css'; // Make sure the path is correct

const Courses = () => {
  return (
    <section id="courses" className="bg-gray-100 py-20 justify-between">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Course Card 1: Introduction to Motoko */}
          <div className="w-full max-w-[422px] animate-border">
            <div className="card-content">
              <h3 className="text-xl font-semibold mb-4">Introduction to Motoko</h3>
              <p className="mb-4">
                Learn the basics of the Motoko programming language and how to get started with development on the Internet Computer.
              </p>
              <button className="bg-white text-blue-500 px-4 py-2 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-colors">
                Go to Course
              </button>
            </div>
          </div>

          {/* Course Card 2: 100 Leetcode Challenges */}
          <div className="w-full max-w-[422px] animate-border">
            <div className="card-content">
              <h3 className="text-xl font-semibold mb-4">100 Leetcode Challenges</h3>
              <p className="mb-4">
                Solve the top 100 Leetcode problems using Motoko and strengthen your problem-solving skills on the Internet Computer.
              </p>
              <button className="bg-white text-blue-500 px-4 py-2 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-colors">
                Go to Course
              </button>
            </div>
          </div>

          {/* Course Card 3: Building dApps on IC */}
          <div className="w-full max-w-[422px] animate-border">
            <div className="card-content">
              <h3 className="text-xl font-semibold mb-4">Building dApps on IC</h3>
              <p className="mb-4">
                Learn how to build decentralized applications on the Internet Computer, leveraging the power of blockchain technology.
              </p>
              <button className="coming-soon">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
