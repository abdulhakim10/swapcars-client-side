import React from 'react';
import { Outlet } from 'react-router-dom';
import Foot from '../pages/shared/Footer/Foot';
import Navbar from '../pages/shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Foot></Foot>
        </div>
    );
};

export default Main;