import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { MdLocalOffer } from 'react-icons/md';

const Advertise = () => {
    const { data: advertisedItems = [] } = useQuery({
        queryKey: ['advertised'],
        queryFn: async () => {
            const res = await fetch('https://swapcars-assignment12-server.vercel.app/advertised');
            const data = await res.json();
            return data;

        }
    })
    return (
        <div className='m-6'>
            {advertisedItems?.length > 0 && <>
            <h2 className="text-4xl text-green-900 text-center mb-8 ">Advertisement</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                {
                    advertisedItems?.map(adItem => <div
                        key={adItem._id}
                        className="w-full mx-auto bg-white shadow  border rounded-lg border-transparent hover:border-blue-500 cursor-pointer">    <div className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover rounded-lg bg-center"
                            style={{ backgroundImage: `url(${adItem.image})` }}>

                            {/* <div className="w-8 h-9 bg-white rounded flex items-center justify-center text-red-500">        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" /></svg></div> */}
                        </div>
                        <div className="">
                            <div className="flex items-center justify-between">
                                <h1 className="text-green-900 text-xl ">{adItem.title}</h1>
                                
                                <div>
                                <span className="text-red-600  line-through my-1">${adItem.original_price}</span>
                            <h3 className="text-green-700 text-2xl flex items-center   my-1"><span>${adItem.resale_price}</span><MdLocalOffer/></h3>
                                </div>

                                {/* <button className="text-gray-500 hover:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg></button> */}

                            </div>
                            
                            {/* <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium">Approved</span> */}
                        </div>
                    </div>)
                }
            </div></>}
        </div>
    );
};

export default Advertise;