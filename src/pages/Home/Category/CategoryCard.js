import React from 'react';
import BuyModal from '../../BuyModal/BuyModal';

const CategoryCard = ({ category }) => {
    // console.log(category)
    const {title, image, original_price, resale_price, seller, location} = category;
    return (
        <div className='w-full border'>
            <div class="flex justify-center">
                <div class="flex flex-col justify-center">
                    <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
                        <div class="overflow-hidden w-full m-4 shadow-sm flex flex-col md:flex-row justify-center">
                            <div class="flex flex-col md:flex-row items-center">
                                <div class=" w-full overflow-hidden"> <img src={image} alt=""
                                    class="" /> </div>
                                <div class="md:w-2/3 m-4 ">
                                    <div class="flex text-gray-500 text-sm m-2">
                                        <div class="m-1 font-bold">Post,</div>
                                        <div class="m-1">{seller.posted_time}</div>
                                    </div>
                                    <div class="font-bold text-black text-xl m-2">{title}</div>
                                    <div class="text-sm text-gray-500 mt-2 m-2">
                                        <p>Original Price: ${original_price}</p>
                                        <p>Sale Price: $ {resale_price}</p>
                                        <p>
                                            Location: {location}
                                        </p>
                                    </div>
                                    <div class="flex cursor-pointer">
                                        <div class="m-2 w-12"> <img src={seller.img} alt=""
                                            class=" rounded-full" /> </div>
                                        <div class="grid m-1">
                                            <div class="font-bold text-sm hover:text-gray-600 mt-2">{seller.name}</div>
                                            <div class=" text-sm hover:text-gray-600">{seller.phone}</div>
                                        </div>
                                    </div>
                                        <div class="flex m-1 gap-4">
                                            <button className='btn btn-sm btn-outline'>add</button>
                                            <label htmlFor="buy-modal" className="btn btn-sm btn-outline">Buy</label>
                                            
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            <BuyModal 
            category={category}
            ></BuyModal>
        </div>
    );
};

export default CategoryCard;