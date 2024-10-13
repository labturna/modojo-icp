import React, { useEffect, useState } from 'react';
import { Actor, HttpAgent } from '@dfinity/agent';
import Sidebar from './Sidebar';
import BreadcrumbCard from './Breadcrumb';
import Footer from '../components/Footer';
import { canisterId as backendCanisterId, idlFactory as ModojoIDL } from '../declarations/modojo_backend';
const Leaderboard = () => {

    const [leaderBoardUsers, setLeaderBoardUsers] = useState([]);
    useEffect(() => {
        const fetchLeaderBoardUsers = async () => {
            try {
                // Fetch the canister ID from the environment variables
                const canisterId = process.env.REACT_APP_MODOJO_BACKEND_CANISTER_ID || backendCanisterId;

                if (!canisterId) {
                    throw new Error("Canister ID is not defined. Please check your environment variables.");
                }
                // Create a new agent
                const agent = new HttpAgent();

                // Disable certificate verification for local development
                if (process.env.REACT_APP_ENV === 'development') {
                    await agent.fetchRootKey();
                }

                // Create the actor for interacting with the canister
                const modojoActor = Actor.createActor(ModojoIDL, {
                    agent,
                    canisterId,
                });

                // Fetch total users from the canister
                console.log('modojoActor', modojoActor)
                const users = await modojoActor.getAllUsersDetails();
                setLeaderBoardUsers(users);
            } catch (error) {
                console.error("Failed to fetch total users:", error);
            }
        };

        fetchLeaderBoardUsers();
    }, []);
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
                        <div className="grid grid-cols-4 gap-4 font-bold">
                            <div>Completed Challenges Count</div>
                            <div>Registration Date</div>
                            <div>Completed Challenges</div>
                            <div>Success Rate</div>
                        </div>
                        <div className="mt-4">
                            {leaderBoardUsers.map((entry, index) => (
                                <div
                                    key={index}
                                    className={`grid grid-cols-4 gap-4 py-2 px-4 hover:bg-[#2e2e50] rounded-lg`}
                                >
                                    <div className="text-lg">{entry.completedChallengeCount}</div>
                                    <div className="text-lg">
                                        {new Date(Number(entry.registrationDate) / 1_000_000).toLocaleDateString()}
                                    </div>
                                    <div className="text-lg">
                                        {entry.completedChallenges.join(', ')}
                                    </div>
                                    <div className="text-lg">{entry.successRate}%</div>
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
