import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faUserClock, faTasks } from '@fortawesome/free-solid-svg-icons';

const InfoCard = ({ title, icon, bgColor, children }) => (
  <div className={`p-4 mt-5 w-full rounded-lg shadow-md text-white ${bgColor}`}>
    <div className="flex items-center">
      <div className="text-2xl mr-4">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="mt-2">{children}</div> {/* İçeriği buraya taşıyoruz */}
      </div>
    </div>
  </div>
);

const DashboardInfoCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Users */}
      <InfoCard
        title="Total Users"
        icon={faUser}
        bgColor="bg-gradient-to-r from-purple-800 via-purple-500 to-purple-100"
      >
        <p className="text-3xl font-bold">5,420</p>
      </InfoCard>

      {/* Total Lessons */}
      <InfoCard
        title="Total Lessons"
        icon={faBook}
        bgColor="bg-gradient-to-r from-teal-800 via-teal-500 to-teal-100"
      >
        <p className="text-3xl font-bold">120</p>
      </InfoCard>

      {/* Users Today */}
      <InfoCard
        title="Users Today"
        icon={faUserClock}
        bgColor="bg-gradient-to-r from-yellow-800 via-yellow-500 to-yellow-100"
      >
        <p className="text-3xl font-bold">340</p>
      </InfoCard>

      {/* Challenges by Difficulty */}
      <InfoCard
        title="Challenges by Difficulty"
        icon={faTasks}
        bgColor="bg-gradient-to-r from-red-800 via-red-500 to-red-100"
      >
        <div className="flex space-x-2">
          <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">Easy: 40</span>
          <span className="bg-orange-200 text-yellow-800 px-2 py-1 rounded-full text-sm">Medium: 25</span>
          <span className="bg-red-200 text-red-800 px-2 py-1 rounded-full text-sm">Hard: 10</span>
        </div>
      </InfoCard>
    </div>
  );
};

export default DashboardInfoCards;
