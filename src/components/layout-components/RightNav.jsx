import React from 'react';
import SocialLogin from '../SocialLogin';
import FindUs from '../FindUs';

const RightNav = () => {
    return (
        <div className='space-y-5'>
            <SocialLogin />
            <FindUs />
        </div>
    );
};

export default RightNav;