import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faRunning, faPuzzlePiece, faBars, faChartLine, faRankingStar } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/img/modojo-logo.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`${isOpen ? 'w-64' : 'w-16'} bg-[#1e1e36] text-white h-screen sticky top-0 flex flex-col transition-all duration-300`}>
      <div className="p-4 flex justify-between items-center">
        {isOpen && <img src={logo} className='w-12 h-12 object-contain' alt='MoDojo' />}
        <button onClick={toggleSidebar} className="focus:outline-none text-[#b3d4f9] px-2">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className={`space-y-4 ${isOpen ? 'px-1' : 'text-center px-3'}`}>
          <li className="flex items-center space-x-3 p-2 text-[#b3d4f9] hover:bg-[#2e2e50] rounded-lg text-lg cursor-pointer">
            <a href="/dashboard" className="flex items-center w-full space-x-3">
              <FontAwesomeIcon icon={faChartLine} size="lg" />
              {isOpen && <span className="text-lg">Dashboard</span>}
            </a>
          </li>
          <li className="flex items-center space-x-3 p-2 text-[#b3d4f9] hover:bg-[#2e2e50] rounded-lg text-lg cursor-pointer">
            <a href="/overview" className="flex items-center w-full space-x-3">
              <FontAwesomeIcon icon={faBook} size="lg" />
              {isOpen && <span className="text-lg">Overview</span>}
            </a>
          </li>
          <li className="flex items-center space-x-3 p-2 text-[#b3d4f9] hover:bg-[#2e2e50] rounded-lg text-lg cursor-pointer">
            <a href="/practice" className="flex items-center w-full space-x-3">
              <FontAwesomeIcon icon={faRunning} size="lg" />
              {isOpen && <span className="text-lg">Practice</span>}
            </a>
          </li>
          <li className="flex items-center space-x-3 p-2 text-[#b3d4f9] hover:bg-[#2e2e50] rounded-lg text-lg cursor-pointer">
            <a href="/challenges" className="flex items-center w-full space-x-3">
              <FontAwesomeIcon icon={faPuzzlePiece} size="lg" />
              {isOpen && <span className="text-lg">Challenges</span>}
            </a>
          </li>
          <li className="flex items-center space-x-3 p-2 text-[#b3d4f9] hover:bg-[#2e2e50] rounded-lg text-lg cursor-pointer">
            <a href="/leaderboard" className="flex items-center w-full space-x-3">
              <FontAwesomeIcon icon={faRankingStar} size="lg" />
              {isOpen && <span className="text-lg">Leaderboard</span>}
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
