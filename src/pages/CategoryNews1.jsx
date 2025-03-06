import React from 'react';
import { data, useLoaderData } from 'react-router';
import NewsCart from '../components/NewsCart';

const CategoryNews1 = () => {
    const { data: news } = useLoaderData();
    console.log(news);
    return (
        <div>
            <h2 className='font-semibold mb-3'>Dragon News Home</h2>
            <p className='text-gray-400 text-sm '>{news.length} News Found On Thin Category</p>
            <div>
                {
                    news.map(singleNews => (
                        <NewsCart key={singleNews._id} news={singleNews} ></NewsCart>
                    ))
                }
            </div>
        </div>

    );
};

export default CategoryNews1;