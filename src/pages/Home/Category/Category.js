import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BuyModal from '../../BuyModal/BuyModal';
import CategoryCard from './CategoryCard';

const Category = () => {
    const categoryItem = useLoaderData();
    const [modalInfo, setModalInfo] = useState([]);
    const handleModal = data => {
        setModalInfo(data);
    }
    return (
        <div>
            <h2 className="text-3xl">category</h2>
        <div className='grid lg:grid-cols-2 lg:w-11/12 grid-cols-1 gap-4 mx-12'>
        {
            categoryItem.map(category => <CategoryCard
            key={category._id}
            handleModal={handleModal}
            category={category}
            ></CategoryCard> )
        }
        <BuyModal
       modalInfo={modalInfo}
        ></BuyModal>
        </div>
        </div>
    );
};

export default Category;