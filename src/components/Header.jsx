import React from 'react';
import logo from "../assets/logo.png"
import moment from 'moment';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2'>
            <div className="logo">
                <img className='w-[300px]' src={logo} alt="" />
            </div>
            <h2 className='text-gray-500 '>Journalism Without Fear or Favour</h2>
            <p className='text-gray-700'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;