import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { MdLocationPin, MdVerifiedUser } from 'react-icons/md';
import { AuthContext } from '../../../contexts/AuthProvider';

const CategoryCard = ({ category, handleModal }) => {
    const {user} = useContext(AuthContext);
    // console.log(category)
    const { title, image, original_price, resale_price, seller, location, _id, wish, condition, status } = category;

    const handleWishList = (uMail, ctg) => {
        const email = uMail;
        const wTitle = ctg.title;
        const wResale = ctg.resale_price;
        const wLocation = ctg.location;
        const wImg = ctg.img
       
        const ctgInfo = {
            email,
            title: wTitle,
            price: wResale,
            location: wLocation,
            image: wImg
        }
        fetch('http://localhost:5000/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(ctgInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged === true){
                    toast.success('Wish listed successfully')
                }
            })
    }

    // remove wish list
    // const handleRemoveWishList = id => {
    //     fetch(`http://localhost:5000/cars/removewishlist/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             toast.success('unlisted successfully')
    //         })
    // }
    return (
        <div className='w-full border'>
            <div className="flex justify-center">
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
                        <div className="overflow-hidden w-full m-4 shadow-sm flex flex-col md:flex-row justify-center">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className=" w-full overflow-hidden"> <img className='h-56 w-full rounded-lg' src={image} alt=""
                                     /> </div>
                                <div className="md:w-2/3 m-4 ">
                                    <div className="flex text-gray-500 text-sm m-2">
                                        <div className="m-1 font-bold">Post,</div>
                                        <div className="m-1">{seller.posted_time}</div>
                                    </div>
                                    <div className="font-bold text-black text-xl m-2">{title}</div>
                                    <div className="text-sm text-gray-500 mt-2 m-2">
                                        <p>Original Price: ${original_price}</p>
                                        <p>Sale Price: $ {resale_price}</p>
                                        <p>Condition: {condition}</p>
                                        <p className='flex items-center text-green-500'>

                                            <MdLocationPin/> {location}
                                        </p>
                                    </div>
                                    <div className="flex cursor-pointer">
                                        <div className="m-2 w-12"> <img src={seller.img} alt=""
                                            className=" rounded-full" /> </div>
                                        <div className="grid m-1">
                                            <div className="font-bold text-sm hover:text-gray-600 mt-2 flex items-center gap-1">
                                              {seller.name}{status === 'verified' && <MdVerifiedUser className='text-green-500'/>}</div>
                                            <div className=" text-sm hover:text-gray-600">{seller.phone}</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center mt-4">
                                        <label onClick={() => handleModal(category)} htmlFor="buy-modal" className="btn btn-sm btn-outline">Buy</label>
                                        { 
                                            
                                                <IoMdHeartEmpty onClick={() => handleWishList(user.email, category)} className='text-3xl' />
                                                
                                                // <IoMdHeart onClick={() => handleRemoveWishList(_id)} className='text-3xl text-red-500' />
                                        }

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
            {/* <BuyModal 
            category={category}
            ></BuyModal> */}
        </div>
    );
};

export default CategoryCard;