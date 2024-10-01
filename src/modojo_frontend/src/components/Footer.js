import React from 'react';
import { FaTwitter, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#1e1e36] text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} MoDojo. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaTelegramPlane size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
