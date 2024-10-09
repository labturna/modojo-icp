import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Breadcrumb.css';
import  { HttpAgent, Actor} from '@dfinity/agent';
import { canisterId as backendCanisterId, idlFactory as ModojoIDL } from '../declarations/modojo_backend/index';
import { Principal } from "@dfinity/principal";

const canisterId = process.env.REACT_APP_MODOJO_BACKEND_CANISTER_ID;

const BreadcrumbCard = ({ items, page, onSelect }) => {
  const { handleLogout, userId } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Select');
  const dropdownRef = useRef(null);
  useEffect(() => {
    const logInUserToBackend = async () => {
      if (userId && canisterId) {
        try {
          const agent = new HttpAgent();
	  console.log("ENV:", process.env.NODE_ENV);
          if (process.env.REACT_APP_ENV === 'development') {
            await agent.fetchRootKey().catch(err => {
                console.log(err)
            });
          }
          const modojoActor = Actor.createActor(ModojoIDL, {
            agent,
            canisterId,
          });
	  const principalUser = Principal.fromText(userId);
          await modojoActor.logInUser(principalUser);
        } catch (error) {
          console.error("Failed to log in user to backend:", error);
        }
      } else {
        console.error("User ID or Canister ID is not defined.");
      }
    };

    logInUserToBackend();
  }, [userId]);
  const getShortenedUserId = (userId) => {
    if (userId && userId.length > 6) {
      return `${userId.slice(0, 3)}...${userId.slice(-3)}`;
    }
    return userId;  // Eğer ID 6 karakterden kısaysa, doğrudan döndür
  };
  const createSlug = (fileName) => {
    return fileName
      .replace('.md', '')                            // .md uzantısını kaldır
      .replace(/([a-z])([A-Z])/g, '$1 $2')          // Küçük harf ve büyük harf arasına boşluk ekle
      .replace(/[^a-zA-Z0-9 ]+/g, ' ')              // Boşlukları ve özel karakterleri boşluk ile değiştir
      .replace(/\s+/g, ' ')                         // Birden fazla boşluğu tek bir boşluk ile değiştir
      .trim();                                      // Başta ve sondaki boşlukları temizle
  };

  const formatSlug = (slug) => {
    const parts = slug.split('-');
    return parts.map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()).join(' ');
  };

  const markdownFiles = [
    'overview.md',
    'why_motoko.md',
    'motivation_and_goals.md',
    'Array.md',
    'AssocList.md',
    'Blob.md',
    'Bool.md',
    'Buffer.md',
    'CertifiedData.md',
    'Char.md',
    'Debug.md',
    'Deque.md',
    'Error.md',
    'ExperimentalCycles.md',
    'ExperimentalInternetComputer.md',
    'ExperimentalStableMemory.md',
    'Float.md',
    'Func.md',
    'Hash.md',
    'HashMap.md',
    'Heap.md',
    'Int.md',
    'Int16.md',
    'Int32.md',
    'Int64.md',
    'Int8.md',
    'Iter.md',
    'IterType.md',
    'List.md',
    'Nat.md',
    'Nat16.md',
    'Nat32.md',
    'Nat64.md',
    'Nat8.md',
    'None.md',
    'Option.md',
    'Order.md',
    'Prelude.md',
    'Principal.md',
    'Random.md',
    'RBTree.md',
    'Region.md',
    'Result.md',
    'Stack.md',
    'Text.md',
    'Time.md',
    'Timer.md',
    'Trie.md',
    'TrieMap.md',
    'TrieSet.md',
  ];

  const filesWithSlugs = markdownFiles.map(file => ({
    name: file,
    slug: createSlug(file)
  }));

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (slug) => {
    setSelectedItem(formatSlug(slug));
    if (onSelect) {
      onSelect(slug);
    }
    setIsOpen(false);
  };

  return (
    <div className="bg-[#1e1e36] rounded-lg mt-3 p-4 flex justify-between items-center shadow-md">
      {/* Breadcrumb Section */}
      {(page === 'dashboard' || page === 'overview' || page === 'practice' || page === 'challenges' || page === 'leaderboard') && (
        <nav className="flex justify-between items-center w-full">
          <div className="flex items-center">
            {items.map((item, index) => (
              <span key={index} className="flex items-center">
                <a href={item.href} className="text-[#b3d4f9] hover:text-[#ffffff]">
                  {item.label}
                </a>
                {index < items.length - 1 && <span className="mx-2 text-[#b3d4f9]">/</span>}
              </span>
            ))}
          </div>

          {page === 'overview' && (
            <div className="flex">
              <div ref={dropdownRef} className="relative text-lg text-left">
                <button className="text-[#b3d4f9] hover:text-[#ffffff] focus:outline-none" onClick={toggleMenu}>
                  <span className="mr-3">{selectedItem}</span>
                  <FontAwesomeIcon icon={faCircleChevronDown} size="lg" />
                </button>

                {/* Dropdown menu */}
                {isOpen && (
                  <div className="relative">
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-80 w-96 overflow-y-auto custom-scrollbar">
                      <ul className="py-1 text-gray-700">
                        {filesWithSlugs.map((file) => (
                          <li key={file.slug}>
                            <button
                              onClick={() => handleSelect(file.slug)}
                              className="block px-4 py-2 text-left w-full hover:bg-gray-100 capitalize"
                            >
                              {formatSlug(file.slug)}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex space-x-2">
            <li className="flex items-center p-2 text-[#b3d4f9] hover:bg-[#2e2e50] rounded-lg text-lg cursor-pointer">
              {userId && <span className="text-[#b3d4f9] mr-2">{getShortenedUserId(userId)}</span>} 
              <FontAwesomeIcon icon={faUser} size="lg" className="mr-2" />
            </li>
            <li className="flex items-center p-2 text-[#b3d4f9] hover:bg-[#2e2e50] rounded-lg text-lg cursor-pointer">
              <FontAwesomeIcon icon={faSignOutAlt} size="lg" className="mr-2" onClick={handleLogout} />
            </li>
          </div>
        </nav>
      )}
    </div>
  );
};

export default BreadcrumbCard;
