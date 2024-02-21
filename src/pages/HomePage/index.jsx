import React from 'react';
import Header from '../../components/Layouts/Header';
import BreakingNews from './BreakingNews';

const HomePage = () => {
    return (
        <div className="relative min-h-screen">
            <Header />
            <BreakingNews />
        </div>
    );
};

export default HomePage;
