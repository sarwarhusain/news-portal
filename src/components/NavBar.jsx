import React from 'react';
import { Link } from 'react-router';
import userIcon from "../assets/user.png"

const NavBar = () => {
    return (
        <div className='flex justify-between'>
            <div className=""></div>
            <div className="nav space-x-2">
                <Link to="/" >Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div className="">
                    <img src={userIcon} alt="" />
                </div>
                <button className='btn btn-neutral'>Login</button>
            </div>

        </div>
    );
};

export default NavBar;