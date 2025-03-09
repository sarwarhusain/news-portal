import React, { useContext } from 'react';
import { Link } from 'react-router';
import userIcon from "../assets/user.png"
import { AuthContext } from '../provider/AuthProvider';

const NavBar = () => {
    const {user} =useContext(AuthContext)
    return (
        <div className='flex justify-between py-3'>
            <div className="">{user && user.name}</div>
            <div className="nav space-x-2">
                <Link to="/" >Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div className="">
                    <img src={userIcon} alt="" />
                </div>
                <Link to="/auth/login" className='btn btn-neutral'>Login</Link>
            </div>

        </div>
    );
};

export default NavBar;