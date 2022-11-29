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
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                {
                    advertisedItems?.map(adItem => <div 
                    key={adItem._id} 
                    class="w-80 bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer">    <div class="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center" 
                    style={{backgroundImage: `url(${adItem.image})`}}>
                        <div>
                            <input type="checkbox" />      
                            </div>
                            <div class="w-8 h-9 bg-white rounded flex items-center justify-center text-red-500">        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" /></svg></div></div>
                                <div class="p-4">
                                    <div class="flex items-center justify-between">
                                        <h1 class="text-green-900 text-xl font-bold">{adItem.title}</h1> <button class="text-gray-500 hover:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg></button></div>
                                            <h3 class="text-red-700 text-xl font-bold line-through my-1">${adItem.original_price}</h3>
                                        <span class="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium">Approved</span>    </div>  </div>)
                }
            </div>
        </div>
    );
};

export default Advertise;