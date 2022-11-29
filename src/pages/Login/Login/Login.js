import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const {logIn, googleSignIn} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginUserEmail, setLoginUserEmail] = useState("");
    const [token] = useToken(loginUserEmail);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from, {replace: true});
    }

    // login handler
    const handleLogin = async(data) => {
        const email = data.email;
        const password = data.password;

        await logIn(email, password);
        setLoginUserEmail(email);
        toast.success('Successfully logged in')
    }


    // google login handler
     const googleLogin = () => {
        googleSignIn()
        .then(result => {
            const data = result.user
            // send to db
            const user = {
                name: data.displayName,
                email: data.email,
                image: data.photoURL,
                type : "Buyer"
            }
    
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                const email = user.email;
                setLoginUserEmail(email);
            })
        })
          
        }
    return (
        <div className='flex justify-center bg-green-100'>
           <div className='w-96 p-10 border-2  border-green-800 rounded-lg m-8'>
           <h2 className="text-3xl font-bold text-center">Login</h2>
            <form className='w-full mx-auto' onSubmit={handleSubmit(handleLogin)}>

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
                <p className='mt-4'>New to Swapcars? Please <Link to='/signup'><span className='text-green-600 font-semibold'>Create New Account</span></Link></p>
                   <div className='w-full max-w-xs'>
                   <input type="submit" className='btn btn-outline w-full max-w-xs mt-6' value='Login' />
                <div className="divider">OR</div>
                <button onClick={googleLogin} className='btn btn-outline w-full max-w-xs mt-4'>CONTINUE WITH GOOGLE</button>
                   </div>
            </form>
           </div>
        </div>
    );
};

export default Login;