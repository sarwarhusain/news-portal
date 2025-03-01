import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const LeftNavbar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category
                // .then(data => console.log(data.data.news_category
            ))
    },  [])

    // 
    // category_id: "07"....
    // category_name: "Arts"

    return (
        <div>
            <div className='flex flex-col gap-2 '>
             <h2 className='font-semibold mb-2'>All Category({categories.length})</h2>
                {
                  categories.map(category => (<NavLink to={`/category/${category.category_id}`} className=' btn' key={category.category_id}>{category.category_name}</NavLink>))
                }
            </div>
        </div>
    );
};

export default LeftNavbar;


