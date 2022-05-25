import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';
const Register = () => {
    const navigate = useNavigate();



    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'

    let errorElement;

    const [token] = useToken(user || googleUser)

    if (loading || googleLoading || updating) {
        return <Loading></Loading>

    }

    if (error || googleError || updateError) {

        errorElement = <div>
            <p className='text-danger'>Error: {error?.message || googleError?.message}
            </p>
        </div>

    }
    if (token) {
        // navigate(from, { replace: true })
        navigate('/')
        console.log('user done ')

        console.log(user)
        console.log(googleUser)
    }

    const onSubmit = async data => {
        console.log(data)

        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('user from register')
        console.log(user)
        // navigate('/appointment')
    };
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* name */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>
                            <input type="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs"
                                {...register("name", {

                                    required: { value: true, message: 'name is required' }

                                })}

                            />

                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message} </span>}



                            </label>
                        </div>

                        {/* password */}


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
                        <input class='btn w-full max-w-xs' type="submit" value='Register' />
                    </form>
                    <p><small>Already have an account ?  <Link className='text-primary' to='/login'> Please Login</Link></small></p>
                    <div class='divider'>OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-neutral">Sign in with Google</button>



                </div>
            </div>
        </div>
    );
};

export default Register;