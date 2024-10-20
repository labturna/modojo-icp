// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import DashboardInfoCards from './InfoCards';
import Sidebar from './Sidebar';
import BreadcrumbCard from './Breadcrumb';
import Graphs from './Graphs';
import Footer from '../components/Footer';
import LoadingScreen from './LoadingScreen';

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);

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
                    items={[{ label: 'Home', href: '/dashboard' }, { label: 'Dashboard', href: '#' }]} 
                    page={"dashboard"} 
                />
                <DashboardInfoCards />
                <Graphs />
                <div className='sticky top-full mt-5'>
                    <Footer />
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
