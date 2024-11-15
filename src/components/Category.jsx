import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = ({category}) => {
    
    return (
        <div >
            <NavLink to={`/category/${category.category_id
            }`} className=' btn w-full mt-2 bg-white'>{category.category_name}</NavLink>
        </div>
    );
};

export default Category;