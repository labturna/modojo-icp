import React from 'react';
import Sidebar from './Sidebar';
import BreadcrumbCard from './Breadcrumb';
import Footer from '../components/Footer';
import Image from '../assets/img/user.jpg'
const Leaderboard = () => {
    // Örnek veri - gerçek veriyi buraya bağlayın
    const leaderboardData = [
        {
            rank: 1,
            profilePic: Image,
            name: 'John Doe',
            walletId: 'wallet_123',
            completedChallenges: 10,
            submittedApps: 5
        },
        {
            rank: 2,
            profilePic: Image,
            name: 'Jane Smith',
            walletId: 'wallet_456',
            completedChallenges: 8,
            submittedApps: 3
        },
        {
            rank: 3,
            profilePic: Image,
            name: 'Alice Johnson',
            walletId: 'wallet_789',
            completedChallenges: 7,
            submittedApps: 4
        },
        {
            rank: 4,
            profilePic: Image,
            name: 'Jane Smith',
            walletId: 'wallet_456',
            completedChallenges: 8,
            submittedApps: 3
        },
        // Diğer yarışmacılar
    ];

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
                            <div className='items-start'>Rank</div>
                            <div className='items-start'>Wallet ID</div>
                            <div className='items-start'>Completed Challenges</div>
                            <div className='items-start'>Submitted dApps</div>
                        </div>
                        <div className="mt-4 text-end">
                            {leaderboardData.map((entry, index) => (
                                <div
                                    key={entry.rank}
                                    className={`grid grid-cols-5 gap-4 py-2 px-4 hover:bg-[#2e2e50] rounded-lg relative`}
                                >
                                    <div className="text-left text-lg">{entry.rank}</div>
                                    <div className="flex items-center space-x-8"> 
                                        <img
                                            src={entry.profilePic}
                                            alt={`Profile of ${entry.name}`}
                                            className="w-14 h-14 rounded-full"
                                        />
                                        <span className='text-lg'>{entry.walletId}</span>
                                    </div>
                                    <div className='text-lg'>{entry.completedChallenges}</div>
                                    <div className='text-lg'>{entry.submittedApps}</div>
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
