import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const categoryItem = useLoaderData();
    return (
        <div>
            <h2 className="text-3xl">category</h2>
        <div className='grid lg:grid-cols-3 w-full grid-cols-1 gap-4 mx-12'>
        {
            categoryItem.map(category => <div key={category._id} className="card bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
               {category.title}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div> 
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>)
        }
        </div>
        </div>
    );
};

export default Category;