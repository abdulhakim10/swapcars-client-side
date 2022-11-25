import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../contexts/AuthProvider';

const Login = () => {
    const {user, logIn, googleSignIn} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const [data, setData] = useState("");

    // login handler
    const handleLogin = async(data) => {
        const email = data.email;
        const password = data.password;

        await logIn(email, password);
    }

    const googleLogin = async() => {
        await await googleSignIn();
    }
    return (
        <div className='flex justify-center'>
           <div className='w-96 p-7'>
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