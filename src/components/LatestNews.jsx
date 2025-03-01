import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router';

const LatestNews = () => {
    return (
        <div className='flex gap-2 items-center bg-base-300 p-2 rounded-sm'>
            <p className='bg-[#D72050] px-3 text-base-200 rounded-sm'>latest</p>
            <Marquee pauseOnHover={true} speed={80} className='space-x-10'>
                <Link to="/news">
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;