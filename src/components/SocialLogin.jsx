import { FaGithub, FaGoogle } from "react-icons/fa";

import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Login With</h2>
            <div className="*:w-full *:bg-base-100 space-y-2">
                <button className="btn"><FaGoogle />Login With Google</button>
                <button className="btn"><FaGithub />login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;