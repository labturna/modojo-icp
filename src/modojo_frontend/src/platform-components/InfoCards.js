import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faTasks, faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';
import { Actor, HttpAgent } from '@dfinity/agent';
import { canisterId as backendCanisterId, idlFactory as ModojoIDL } from '../declarations/modojo_backend';
import { useAuth } from '../context/AuthContext';
import { Principal } from "@dfinity/principal";

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
  const [totalUsers, setTotalUsers] = useState(0);
  const { userId } = useAuth();
  const [userCompletedChallenges, setUserCompletedChallenges] = useState(0);
  const [userScore, setUserScore] = useState(0);


  useEffect(() => {
    const fetchTotalUsers = async () => {
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
        const users = await modojoActor.getTotalUsers();
        setTotalUsers(Number(users));
      } catch (error) {
        console.error("Failed to fetch total users:", error);
      }
    };

    fetchTotalUsers();
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
        setUserCompletedChallenges(Number(userDetails[0].completedChallengeCount.toString()));
        setUserScore(userDetails[0].score);
      } catch (error) {
        console.error("Failed to fetch user's details:", error);
      }
    };

    fetchUserDetails();
  }, []);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <InfoCard
        title="Total Users"
        icon={faUser}
        bgColor="bg-gradient-to-r from-purple-800 via-purple-500 to-purple-100"
      >
        <p className="text-3xl font-bold">{totalUsers}</p>
      </InfoCard>

      <InfoCard
        title="Total Lessons"
        icon={faBook}
        bgColor="bg-gradient-to-r from-teal-800 via-teal-500 to-teal-100"
      >
        <p className="text-3xl font-bold">120</p>
      </InfoCard>
      <InfoCard
        title="Completed Challenges"
        icon={faFireFlameCurved}
        bgColor="bg-gradient-to-r from-orange-800 via-orange-500 to-orange-100"
      >
        <div className="flex justify-between items-center w-full">
          <p className="text-2xl font-bold">{userCompletedChallenges}</p>
          <p className="text-2xl font-bold inline-block bg-blue-600 text-white px-4 py-2 rounded-full shadow-md">
            Score : {userScore}
          </p>
        </div>
      </InfoCard>
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
