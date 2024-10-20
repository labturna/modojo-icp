import React, { useEffect, useState } from 'react';
import { Actor, HttpAgent } from '@dfinity/agent';
import Sidebar from './Sidebar';
import BreadcrumbCard from './Breadcrumb';
import Footer from '../components/Footer';
import { canisterId as backendCanisterId, idlFactory as ModojoIDL } from '../declarations/modojo_backend';
import { useAuth } from '../context/AuthContext';
import { Principal } from "@dfinity/principal";
import LoadingScreen from './LoadingScreen';

const Leaderboard = () => {

    const [leaderBoardUsers, setLeaderBoardUsers] = useState([]);
    const { userId } = useAuth();
    const [userName, setUsername] = useState("");
    const [isLoading, setIsLoading] = useState(true);

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
                // console.log('modojoActor', modojoActor)
                const users = await modojoActor.getAllUsersDetails();
                const sortedUsers = users.sort((a, b) => b.score - a.score);
                // console.log('users', users)
                setLeaderBoardUsers(sortedUsers);
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
                // const completedChallenge = userDetails[0].completedChallengeCount
                // const userScore = userDetails[0].score
                // setUserCompletedChallenges(Number(userDetails[0].completedChallengeCount.toString()));
                // setUserScore(userDetails[0].score);
                setUsername(userDetails[0].username);
            } catch (error) {
                console.error("Failed to fetch user's details:", error);
            }
        };

        fetchUserDetails();
    }, []);


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }
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
                            {leaderBoardUsers.map((entry, index) => (
                                <div
                                    key={index}
                                    className={`grid grid-cols-5 gap-4 py-2 px-4 rounded-lg ${entry.username === userName ? 'bg-[#312e81] text-white' : 'hover:bg-[#2e2e50]'}`}
                                >
                                    <div className='text-lg text-bold'>{index + 1}</div>
                                    <div className='text-lg'>{entry.username}</div>
                                    <div className="text-lg">{Number(entry.completedChallengeCount)}</div>
                                    <div className="text-lg">
                                        {new Date(Number(entry.registrationDate) / 1_000_000).toLocaleDateString()}
                                    </div>
                                    <div className="text-lg">{entry.score}</div>
                                </div>
                            ))}
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
