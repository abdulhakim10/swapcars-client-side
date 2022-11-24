import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {

    const {category_id, category_name, category_image} = category;

    return (
        <div 
             class="lg:w-full sm:w-1/2 p-4">
                <div class="flex relative">
                  <img alt="gallery" class="rounded-lg absolute inset-0 w-full h-full object-cover object-center" src={category_image}/>
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-white opacity-0 hover:opacity-80">
                    <h1 class="title-font text-3xl font-bold text-gray-900 mb-3">{category_name} Cars</h1>
                    <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <Link to={`/categories/${category_id}`}><button className='btn btn-outline'>View more</button></Link>
                  </div>
                </div>
                </div>
    );
};

export default CategoryCard;