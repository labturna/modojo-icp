import React, { useEffect, useState } from 'react';
import { Actor, HttpAgent } from '@dfinity/agent';
import Sidebar from './Sidebar';
import BreadcrumbCard from './Breadcrumb';
import Footer from '../components/Footer';
import { canisterId as backendCanisterId, idlFactory as ModojoIDL } from '../declarations/modojo_backend';
import { useAuth } from '../context/AuthContext';
import { Principal } from "@dfinity/principal";
import leaderboardData from '../assets/json/test.json';

const Leaderboard = () => {

    const [leaderBoardUsers, setLeaderBoardUsers] = useState([]);
    const { userId } = useAuth();
    const [userName, setUsername] = useState("");

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchLeaderBoardUsers = async () => {
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
                const users = await modojoActor.getAllUsersDetails();
                const sortedUsers = users.sort((a, b) => b.score - a.score);
                
                // Combine users from backend and JSON file, then sort
                const combinedUsers = [...sortedUsers, ...leaderboardData].sort((a, b) => b.score - a.score);
                setLeaderBoardUsers(combinedUsers);
                //console.log(combinedUsers);
            } catch (error) {
                console.error("Failed to fetch total users:", error);
            }
        };

        fetchLeaderBoardUsers();
    }, []);

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
                const userDetails = await modojoActor.getUserDetails(principalUser);
                setUsername(userDetails[0].username);
            } catch (error) {
                console.error("Failed to fetch user's details:", error);
            }
        };

        fetchUserDetails();
    }, []);

    // Calculate pagination values
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = leaderBoardUsers.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(leaderBoardUsers.length / itemsPerPage);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 pl-6 pr-6 pt-6">
                <BreadcrumbCard
                    items={[{ label: 'Home', href: '/dashboard' }, { label: 'Leaderboard', href: '#' }]}
                    page={"leaderboard"}
                />
                <div className="mt-6 relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="bg-[#1e1e36] text-[#b3d4f9] p-6 rounded-lg shadow-md">
                        <div className="grid grid-cols-5 gap-4 font-bold">
                            <div>Rank</div>
                            <div>Username</div>
                            <div>Completed Challenges Count</div>
                            <div>Registration Date</div>
                            <div>Score</div>
                        </div>
                        <div className="mt-4">
                            {currentItems.map((entry, index) => (
                                <div
                                    key={index}
                                    className={`grid grid-cols-5 gap-4 py-2 px-4 rounded-lg ${entry.username === userName ? 'bg-[#312e81] text-white' : 'hover:bg-[#2e2e50]'}`}
                                >
                                    <div className='text-lg text-bold'>{indexOfFirstItem + index + 1}</div>
                                    <div className='text-lg'>{entry.username}</div>
                                    <div className="text-lg">{Number(entry.completedChallengeCount)}</div>
                                    <div className="text-lg">
                                        {new Date(Number(entry.registrationDate) / 1_000_000).toLocaleDateString()}
                                    </div>
                                    <div className="text-lg">{entry.score}</div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <button
                                onClick={handlePreviousPage}
                                disabled={currentPage === 1}
                                className="bg-[#2e2e50] text-[#b3d4f9] px-4 py-2 rounded-md hover:bg-[#3e3e5e] disabled:opacity-50"
                            >
                                Previous
                            </button>
                            <span>Page {currentPage} of {totalPages}</span>
                            <button
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                                className="bg-[#2e2e50] text-[#b3d4f9] px-4 py-2 rounded-md hover:bg-[#3e3e5e] disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
                <div className="sticky top-full mt-5">
                    <Footer />
                </div>
            </main>
        </div>
    );
}

export default Leaderboard;
