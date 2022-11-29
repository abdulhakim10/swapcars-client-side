import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeCategoryCard from './HomeCategoryCard';

const AllCategories = () => {

    const { data: categories, isLoading } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = res.json();
            return data;
        }
    })

    if (isLoading) {
        return 'Loading...'
    }
    return (
        <div>
            <h2 className="text-4xl  text-green-900 my-6 text-center">Categories</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {
                categories.map(category =>  <HomeCategoryCard
                key={category._id}
                category={category}
                ></HomeCategoryCard>)
            }
            </div>
            
        </div>
    );
};

export default AllCategories;