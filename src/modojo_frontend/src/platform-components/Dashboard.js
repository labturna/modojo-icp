// src/components/Dashboard.js
import React from 'react';
import DashboardInfoCards from './InfoCards';
import Sidebar from './Sidebar';
import BreadcrumbCard from './Breadcrumb';
import Graphs from './Graphs';
import Footer from '../components/Footer';

const Dashboard = () => {
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
