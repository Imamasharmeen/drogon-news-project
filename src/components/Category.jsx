import React from 'react';

const Category = ({category}) => {
    
    return (
        <div >
            <h1 className=' btn w-full mt-2 bg-white'>{category.category_name}</h1>
        </div>
    );
};

export default Category;