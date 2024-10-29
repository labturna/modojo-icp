import React, { useState } from 'react';
import { FaStickyNote, FaStore, FaComments } from 'react-icons/fa';
import Sidebar from './Sidebar';
import BreadcrumbCard from './Breadcrumb';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import { HttpAgent, Actor } from '@dfinity/agent';
import { canisterId as backendCanisterId, idlFactory as ModojoIDL } from '../declarations/modojo_backend/index';
import { Principal } from '@dfinity/principal';

const DAppSubmissionPage = () => {
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: 'Project 1: Note Taking Application (Easy)',
            slug: 'note-taking-app',
            difficulty: 'Easy',
            points: 20.0,
            description:
                'Create a decentralized note taking application where users can securely create, edit, and manage their notes. The data should be stored in a decentralized manner ensuring privacy and security.',
            requirements: [
                'Allow users to create, edit, and delete notes',
                'Store notes in a decentralized manner',
                'Provide user authentication (e.g., via Internet Identity)',
            ],
            icon: <FaStickyNote />, 
        },
        {
            id: 2,
            title: 'Project 2: NFT Marketplace (Medium)',
            slug: 'nft-marketplace',
            difficulty: 'Medium',
            points: 30.0,
            description:
                'Develop an NFT marketplace where users can mint, buy, and sell digital assets. Users should be able to connect their wallet, list items for sale, and browse available NFTs.',
            requirements: [
                'Enable users to mint NFTs',
                'Create a marketplace for listing and buying NFTs',
                'Implement wallet integration (e.g., Plug Wallet, Stoic Wallet)',
            ],
            icon: <FaStore />,
        },
        {
            id: 3,
            title: 'Project 3: Decentralized Chat Application (Medium)',
            slug: 'chat-app',
            difficulty: 'Medium',
            points: 30.0,
            description:
                'Build a decentralized chat application where users can communicate with each other in real-time. Messages should be encrypted, and user privacy should be ensured.',
            requirements: [
                'Implement real-time messaging',
                'Ensure end-to-end encryption',
                'Provide a user-friendly interface with React',
            ],
            icon: <FaComments />,
        },
    ]);
    
    const canisterId = process.env.REACT_APP_MODOJO_BACKEND_CANISTER_ID || backendCanisterId;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [url, setUrl] = useState('');
    const { userId } = useAuth();
    const [selectedProjectTitle, setSelectedProjectTitle] = useState('');


    const handleUrlSubmit = async () => {
        const principalUser = Principal.fromText(userId);
        if (principalUser && selectedProject !== null) {
            try {
                const agent = new HttpAgent();
                if (process.env.REACT_APP_ENV === 'development') {
                    await agent.fetchRootKey().catch(err => {
                        console.log(err);
                    });
                }
                const modojoActor = Actor.createActor(ModojoIDL, {
                    agent,
                    canisterId,
                });
                const project = projects.find(p => p.id === selectedProject);
                if (project) {
                    // Assuming the backend method is updated to accept a string (slug)
                    const projectUrl = url; // Assuming `url` is where the project URL is stored
                    await modojoActor.submitProject(principalUser, project.slug, projectUrl);
                    console.log(`Project ${selectedProject} submitted with slug: ${project.slug} and URL: ${projectUrl}.`);
                }
            } catch (error) {
                console.error("Failed to submit project to backend:", error);
            }
        }
        setIsModalOpen(false);
        setUrl('');
    };
        

    const handleSubmitProjectModal = (projectId, projectTitle) => {
        setSelectedProject(projectId);
        setSelectedProjectTitle(projectTitle);
        setIsModalOpen(true);
    };

    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 pl-6 pr-6 pt-6">
                <BreadcrumbCard
                    items={[{ label: 'Home', href: '/submission' }, { label: 'dApp Submission', href: '#' }]}
                    page={"submission"}
                />
                <p className="mb-6">
                </p>
                <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    Below are the three <span class="font-medium">dApp projects</span> that you can choose to complete. Each project comes with a set of requirements that must be met. Select a project to view its details and start working on it. Once completed, you can submit your work for review.
                </div>
                {projects.map((project) => (
                    <div key={project.id} className="bg-[#1e1e36] text-white mb-4 border border-gray-300 rounded-lg">
                        <div className="bg-gray-100 p-4 cursor-pointer flex items-center justify-between" onClick={() => setProjects((prev) => prev.map((p) => p.id === project.id ? { ...p, expanded: !p.expanded } : p))}>
                            <div className="flex items-center">
                                <span className="text-2xl mr-3">{project.icon}</span>
                                <h6 className="text-xl font-semibold">
                                    {project.title}
                                </h6>
                                <span className="ml-4 bg-yellow-400 text-black text-sm font-bold px-2 py-1 rounded">
                                    {project.points} Points
                                </span>
                            </div>
                            <span className="text-gray-600">
                                {project.expanded ? '-' : '+'}
                            </span>
                        </div>
                        {project.expanded && (
                            <div className="flex flex-col p-4">
                                <p className="mb-4">
                                    {project.description}
                                </p>
                                <h6 className="font-bold mb-2">
                                    Requirements:
                                </h6>
                                <ul className="list-disc pl-5 mb-4">
                                    {project.requirements.map((requirement, index) => (
                                        <li key={index} className="mb-1">
                                            {requirement}
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={() => handleSubmitProjectModal(project.id, project.title)} className="bg-blue-500 text-white py-2 px-4 rounded-md border border-[#b3d4f9] w-full">
                                    Submit Project
                                </button>
                            </div>
                        )}
                    </div>
                ))}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-[#2e2e50] p-6 rounded-lg shadow-lg max-w-md w-full">
                            <h2 className="text-xl text-white font-bold mb-4">Submit Project: {selectedProjectTitle}</h2>
                            <input
                                type="text"
                                placeholder="Enter your project repository URL"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                className="border border-gray-300 rounded p-2 w-full mb-4"
                            />
                            <div className="flex justify-end">
                                <button onClick={handleUrlSubmit} className="bg-[#2e2e50] mr-2 text-white px-4 py-2 rounded-md border border-[#b3d4f9] hover:bg-[#2e2e50] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md">
                                    Submit
                                </button>
                                <button onClick={() => setIsModalOpen(false)} className="bg-[#2e2e50] text-white px-4 py-2 rounded-md border border-[#b3d4f9] hover:bg-[#2e2e50] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <div className="sticky top-full mt-5">
                    <Footer />
                </div>
            </main>
        </div>
    );
};

export default DAppSubmissionPage;
