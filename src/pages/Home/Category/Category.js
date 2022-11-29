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
        <div className='w-full'>
        <div className='grid lg:grid-cols-2  grid-cols-1 gap-4 m-12'>
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