import React from 'react';
import { useForm } from "react-hook-form";


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const [data, setData] = useState("");

    const imageHostKey = process.env.REACT_APP_imagebb_key;

    const handleSignup = async(data) => {
        console.log(data)
        
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        
    }
    return (
        <div className='flex justify-center'>
           <div className='w-96 p-7'>
           <h2 className="text-3xl font-bold text-center">Sign Up</h2>
            <form className='w-full mx-auto' onSubmit={handleSubmit(handleSignup)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input {...register("name",{
                        required: 'Name is required'
                    })} placeholder="Enter Your Name" type="text" className="input input-bordered w-full max-w-xs" />
                </div>
                {errors.name && <p className="text-red-600">{errors.name?.message}</p>}

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input {...register("image",{
                        required: 'Image is required'
                    })} type="file" className="input input-bordered w-full max-w-xs" />
                </div>
                {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email",{
                        required: 'Email is required'
                    })} placeholder="Email" type="email" className="input input-bordered w-full max-w-xs" />
                </div>
                {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password")} placeholder="Password" type="password" className="input input-bordered w-full max-w-xs" />
                </div>
                
                   <div className='w-full max-w-xs'>
                   <input type="submit" className='btn btn-outline w-full max-w-xs mt-6' value='Login' />
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full max-w-xs mt-4'>CONTINUE WITH GOOGLE</button>
                   </div>
            </form>
           </div>
        </div>
    );
};

export default SignUp;