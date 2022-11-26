import React from 'react';
import { Outlet } from 'react-router-dom';
import Foot from '../pages/shared/Footer/Foot';
import Header from '../pages/shared/Navbar/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Foot></Foot>
        </div>
    );
};

export default Main;