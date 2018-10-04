import React from 'react';
import SearchBar from './searchBar';
import { NavBtn } from './navBtn';

export const NavBar = () => {
    return (
        <div className="nav-bar">
            <SearchBar />
            <NavBtn className="home-nav-btn" title="Home" path="/" />
            <NavBtn className="page-one-nav-btn" title="Page One" path="/pageOne" />
        </div>
    );
}