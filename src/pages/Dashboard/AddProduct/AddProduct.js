import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProduct = () => {
    const {user} = useContext(AuthContext);
    const {register, handleSubmit, formState: { errors }} = useForm();

    const handleAddProduct = data => {
        console.log('addProduct', data);
    }
    return (
        <div className='m-12'>
            <h2 className="text-3xl text-center font-semibold">Add Product</h2>
            <div >
                <form 
                onSubmit={handleSubmit(handleAddProduct)}
                className='grid lg:grid-cols-2 grid-cols-1 gap-2'>
                    <div>
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input {...register('name', {
                            value: `${user?.displayName}`
                        })} 
                        
                        disabled
                        type="text" placeholder="Enter Product Name" className="input input-bordered input-sm w-full "/>
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
                        className="input input-bordered input-sm w-full " />
                    
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input {...register('name', {
                            required: 'Name is required'
                        })} type="text" placeholder="Type here" className="input input-bordered input-sm w-full " />
                    {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input {...register('name', {
                            required: 'Name is required'
                        })} type="text" placeholder="Type here" className="input input-bordered input-sm w-full " />
                    {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input {...register('name', {
                            required: 'Name is required'
                        })} type="text" placeholder="Type here" className="input input-bordered input-sm w-full " />
                    {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input {...register('name', {
                            required: 'Name is required'
                        })} type="text" placeholder="Type here" className="input input-bordered input-sm w-full " />
                    {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input {...register('name', {
                            required: 'Name is required'
                        })} type="text" placeholder="Type here" className="input input-bordered input-sm w-full " />
                    {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input {...register('name', {
                            required: 'Name is required'
                        })} type="text" placeholder="Type here" className="input input-bordered input-sm w-full " />
                    {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>
                    <div>
                    <input type="submit" className="btn btn-outline btn-sm w-full" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;