import React, { useEffect, useState } from 'react';
import Category from './Category';

const LeftNavbar = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data.data.news_category))
    },[])
    
    return (
        <div >
            <h1>All Category({categories.length})</h1>
            {
                categories.map(category=><Category key={category.category_id} category={category}></Category>)
            }        
        </div>
    );
};

export default LeftNavbar;