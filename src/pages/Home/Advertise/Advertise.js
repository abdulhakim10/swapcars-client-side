import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Advertise = () => {
    const { data: advertisedItems = [] } = useQuery({
        queryKey: ['advertised'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertised');
            const data = await res.json();
            return data;
            
        }
    })
    return (
        <div className='m-6'>
            <h2 className="text-2xl text-center m-4 font-bold">Advertisement: {advertisedItems?.length}</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
                {
                    advertisedItems?.map(adItem => <div key={adItem._id} className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">{adItem.title}</h2>
                      <h2 className="text-2xl text-green-500 font-bold">On Sale</h2>
                    </div>
                    <figure><img className='h-56 w-full' src={adItem.image} alt="Shoes" /></figure>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Advertise;