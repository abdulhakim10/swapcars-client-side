import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BuyModal from '../../BuyModal/BuyModal';
import CategoryCard from './CategoryCard';

const Category = () => {
    const categoryItem = useLoaderData();
    return (
        <div>
            <h2 className="text-3xl">category</h2>
        <div className='grid lg:grid-cols-2 lg:w-11/12 grid-cols-1 gap-4 mx-12'>
        {
            categoryItem.map(category => <CategoryCard
            key={category._id}
            category={category}
            ></CategoryCard> )
          }
          {/* <BuyModal></BuyModal> */}
        </div>
        </div>
    );
};

export default Category;