import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
// import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import auth from '../../firebase.init';

// import Loading from '../Loading';
import useToken from '../../hooks/useToken';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'
    const navigate = useNavigate();
    let errorElement;

    const [token] = useToken(user || googleUser);

    useEffect(
        () => {
            if (token) {
                navigate(from, { replace: true })
                console.log('user done from login ')
                console.log(user)
            }

        }
        , [token, from, navigate])

    if (loading || googleLoading) {
        return <Loading></Loading>

    }

    if (error || googleError) {

        errorElement = <div>
            <p className='text-danger'>Error: {error?.message || googleError?.message}
            </p>
        </div>

    }


    const onSubmit = data => {
        console.log(data)

        signInWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div className=''>
            {/* <h1 className='text-2xl font-extrabold lg:text-center mt-5 '>Welcome To Car Manufacture BD</h1> */}
            <div className='h-screen flex justify-center items-center'>

                <div className="card w-96 bg-base-100 shadow-xl ">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>

                                </label>
                                <input type="email" placeholder="Your email" className="input input-bordered w-full max-w-xs"
                                    {...register("email", {

                                        required: { value: true, message: 'email is required' },
                                        pattern: { value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, message: 'Provide e valid email address' }
                                    })}

                                />

                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message} </span>}


                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message} </span>}
                                </label>
                            </div>



                            {/* password starts */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>

                                </label>
                                <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs"
                                    {...register("password", {

                                        required: { value: true, message: 'password is required' },
                                        minLength: { value: 6, message: 'Must be 6 character or longer' }
                                    })}

                                />

                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message} </span>}


                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message} </span>}
                                </label>
                            </div>


                            {/* ---- */}


                            <p className='text-red-500'><small>{errorElement}</small></p>
                            <input class='btn  btn-secondary w-full max-w-xs' type="submit" value='login' />
                        </form>
                        <p><small>new to Doctors portal ?  <Link className='text-primary' to='/register'> Create new account</Link></small></p>
                        <div class='divider'>OR</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-secondary btn-neutral">Sign in with Google</button>



                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;