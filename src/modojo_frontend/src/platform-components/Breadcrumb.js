import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Breadcrumb.css';
import { HttpAgent, Actor } from '@dfinity/agent';
import { canisterId as backendCanisterId, idlFactory as ModojoIDL } from '../declarations/modojo_backend/index';
import { Principal } from "@dfinity/principal";

const canisterId = process.env.REACT_APP_MODOJO_BACKEND_CANISTER_ID || backendCanisterId;

const BreadcrumbCard = ({ items, page, onSelect }) => {
  const { handleLogout, userId } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Select');
  const [userDetails, setUserDetails] = useState("Unknown");
  const [isUsernamePopupOpen, setIsUsernamePopupOpen] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const dropdownRef = useRef(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [userChallengesCompleted, setUserChallengesCompleted] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [userRegistrationDate, setUserRegistrationDate] = useState("Unknown");

  useEffect(() => {
    const logInUserToBackend = async () => {
      if (userId && canisterId) {
        try {
          const agent = new HttpAgent();
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

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const canisterId = process.env.REACT_APP_MODOJO_BACKEND_CANISTER_ID || backendCanisterId;
        if (!canisterId) {
          throw new Error("Canister ID is not defined. Please check your environment variables.");
        }
        const agent = new HttpAgent();
        if (process.env.REACT_APP_ENV === 'development') {
          await agent.fetchRootKey();
        }
        const modojoActor = Actor.createActor(ModojoIDL, {
          agent,
          canisterId,
        });
        const principalUser = Principal.fromText(userId);
        const userDetailsResponse = await modojoActor.getUserDetails(principalUser);
        const userName = userDetailsResponse[0].username;
        const challengesCompleted = userDetailsResponse[0].completedChallenges;
        const score = userDetailsResponse[0].score;
        const registrationDate = userDetailsResponse[0].registrationDate;
        setUserDetails(userName);
        setUserChallengesCompleted(challengesCompleted);
        setUserScore(score);
        setUserRegistrationDate(registrationDate);

        if (userName === "Unknown") {
          setIsUsernamePopupOpen(true);
        }
      } catch (error) {
        console.error("Failed to fetch user's details:", error);
      }
    };

    fetchUserDetails();
  }, [userId]);

  const handleUsernameSubmit = async () => {
    try {
      const agent = new HttpAgent();
      if (process.env.REACT_APP_ENV === 'development') {
        await agent.fetchRootKey();
      }
      const modojoActor = Actor.createActor(ModojoIDL, {
        agent,
        canisterId,
      });
      const principalUser = Principal.fromText(userId);
      await modojoActor.updateUsername(principalUser, newUsername); // `updateUsername` adlı bir backend fonksiyonu oluşturmanız gerekecek
      setUserDetails(newUsername);
      setIsUsernamePopupOpen(false);
    } catch (error) {
      console.error("Failed to update username:", error);
    }
  };

  const createSlug = (fileName) => {
    return fileName
      .replace('.md', '')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/[^a-zA-Z0-9 ]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
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

  const openProfileModal = () => {
    setIsProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  return (
    <>
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
              <li className="flex items-center px-2 text-[#b3d4f9] hover:bg-[#2e2e50] rounded-lg text-lg cursor-pointer" onClick={openProfileModal}>
                {userId && <span className="text-[#b3d4f9] mr-2">{userDetails}</span>} 
                <FontAwesomeIcon icon={faUser} size="lg" className="mr-2" />
              </li>
              <li className="flex items-center px-2 text-[#b3d4f9] hover:bg-[#2e2e50] rounded-lg text-lg cursor-pointer">
                <FontAwesomeIcon icon={faSignOutAlt} size="lg" className="mr-2" onClick={handleLogout} />
              </li>
            </div>
          </nav>
        )}
      </div>

      {/* Pop-up for Username */}
      {isUsernamePopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#2e2e50] p-6 rounded-lg shadow-lg">
            <h2 className="text-white text-2xl font-bold mb-4">Enter Your Username</h2>
            <input
              type="text"
              className="border border-gray-300 p-2 mb-4 w-full rounded-md"
              placeholder="Enter new username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <button
              className="bg-[#2e2e50] text-white px-4 py-2 rounded-md border border-[#b3d4f9] hover:bg-[#2e2e50] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md"
              onClick={handleUsernameSubmit}
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* Profile Modal */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#2e2e50] p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-white text-2xl font-bold mb-4">Profile</h2>
            <p className="text-white mb-4">Username: <span class="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">{userDetails}</span></p>
            <p className="text-white mb-4">User ID: {userId}</p>
            <p className="text-white mb-4">Challenges Completed: {userChallengesCompleted.length > 0 ? userChallengesCompleted.map((challenge, index) => (
              <span key={index} className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                {challenge}
              </span>
            )) : "None"}</p>
            <p className="text-white mb-4">Score: <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">{userScore}</span>
            </p>
            <p className="text-white mb-4">Registration Date: {new Date(Number(userRegistrationDate) / 1_000_000).toLocaleDateString()}</p>
            <button
              className="bg-[#2e2e50] text-white px-4 py-2 rounded-md border border-[#b3d4f9] hover:bg-[#2e2e50] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md"
              onClick={closeProfileModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BreadcrumbCard;
