import React from 'react';
import { Link } from 'react-router-dom';

const HomeCategoryCard = ({category}) => {

    const {category_id, category_name, category_image} = category;

    return (
        <div 
             className="lg:w-full sm:w-1/2 p-4">
                <div className="flex relative">
                  <img alt="gallery" className="rounded-lg absolute inset-0 w-full h-full object-cover object-center" src={category_image}/>
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-white opacity-0 hover:opacity-80">
                    <h1 className="font-bold text-3xl font- text-center text-green-900 mb-3">{category_name} Cars</h1>
                    
                    <Link to={`/categories/${category_id}`}><button className='btn mx-auto w-full btn-outline'>View more</button></Link>
                  </div>
                </div>
                </div>
    );
};

export default HomeCategoryCard;