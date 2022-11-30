import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider';
import date from 'date-and-time';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const imageHostKey = process.env.REACT_APP_imagebb_key;

    const handleAddProduct = async(data) => {
        const now = new Date();
        const newTime = date.format(now, 'YYYY/MM/DD HH:mm:ss');
        
        // imgBB
        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        const res = await fetch(url, {
            method: 'POST',
            body: formData
        });
        const img = await res.json();
        const newImage = img.data.url;
        
        // car info formation send to DB 
        const car = {
            category_id: data.id,
            category_name: data.category,
            title: data.title,
            location: data.location,
            used: data.used,
            original_price: data.original,
            resale_price: data.resale,
            email: data.email,
            seller: {
                name: data.name,
                phone: data.phone,
                img: data.image,
                posted_time: newTime
            },
            image: newImage,
            condition: data.condition
            
        }

        fetch('https://swapcars-assignment12-server.vercel.app/cars', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(car)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            reset();
            toast.success('Product successfully added');
        })
        
        console.log(car);
    }

    return (
        <div className='m-12 border-2 border-green-800 rounded-lg p-10'>
            <h2 className="text-3xl text-green-800 mb-4 text-center font-semibold">Add Product</h2>
            <div >
                <form
                    onSubmit={handleSubmit(handleAddProduct)}
                    className='grid lg:grid-cols-2 grid-cols-1 gap-4'>

                    <div>
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input {...register('name', {
                            value: `${user?.displayName}`
                        })}

                            disabled
                            type="text" placeholder="Enter Product Name" className="input input-bordered w-full " />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input {...register('email', {
                            value: `${user?.email}`
                        })}
                            disabled
                            type="text"
                            className="input input-bordered w-full " />

                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Your Image</span>
                        </label>
                        <input {...register('image', {
                            value: `${user?.photoURL}`
                        })} 
                        disabled
                        type="text" placeholder="Type here" className="input input-bordered w-full " />
                        {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Contact Number</span>
                        </label>
                        <input {...register('phone', {
                            required: 'Contact Number is required'
                        })} type="text" placeholder="Enter your contact number" className="input input-bordered w-full " />
                        {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <input {...register('title', {
                            required: 'Item Name is required'
                        })} type="text" placeholder="Enter item name" className="input input-bordered w-full " />
                        {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Original Price</span>
                        </label>
                        <input {...register('original', {
                            required: 'Original Price is required'
                        })} type="text" placeholder="Enter item's original price" className="input input-bordered  w-full " />
                        {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Resale Price</span>
                        </label>
                        <input {...register('resale', {
                            required: 'Resale Price is required'
                        })} type="text" placeholder="Enter resale price" className="input input-bordered w-full " />
                        {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Use Duration</span>
                        </label>
                        <input {...register('used', {
                            required: 'Use Duration is required'
                        })} type="text" placeholder="Enter use duration" className="input input-bordered w-full " />
                        {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input {...register('location', {
                            required: 'Location is required'
                        })} type="text" placeholder="Enter location" className="input input-bordered w-full " />
                        {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Item Image</span>
                        </label>
                        <input {...register('photo', {
                            required: 'Photo is required'
                        })} type="file" className="input input-bordered w-full " />
                        {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Item Condition</span>
                        </label>
                        <select {...register('condition')} className="select select-bordered w-full ">
                            <option  selected>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                        </select>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Category Name</span>
                        </label>
                        <select {...register('category')} className="select select-bordered w-full ">
                            <option  selected>SUV</option>
                            <option>Van</option>
                            <option>Sedan</option>
                        </select>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Category Id</span>
                        </label>
                        <select {...register('id')} className="select select-bordered w-full ">
                            <option value='01' selected>SUV</option>
                            <option value='03'>Van</option>
                            <option value='02'>Sedan</option>
                        </select>
                    </div>

                    <div className='md:col-span-2'>
                        <input type="submit" className="btn btn-outline mt-4  w-full " />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;