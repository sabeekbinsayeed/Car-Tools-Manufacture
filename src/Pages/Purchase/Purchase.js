import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import './Purchase.css'

const Purchase = () => {
    const { id } = useParams();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'
    const navigate = useNavigate();
    let errorElement;



    return (

        <div class="container px-6 mx-auto ">




            <section class="mb-32 text-gray-800 text-center lg:text-left">
                <div class="px-6 py-10 md:px-12 ">
                    <div class="grid lg:grid-cols-2 lg:gap-x-12  ">
                        <div class="mb-12 lg:mb-0 ">
                            <h1 className='text-2xl font-extrabold lg:text-center '>Product Name</h1>
                            <h1 className='text-xl font-bold my-4 lg:text-center
                            '>300 Tk</h1>
                            <h1 className='lg:text-center'> <span className='font-bold'>Quantity Available</span> : 45</h1>
                            <h1 className='lg:text-center'> <span className='font-bold'>Minimum allowed</span>: 10</h1>

                            <p className='mt-6 italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium laudantium quam! Alias consequatur impedit ipsum neque optio et est perspiciatis. Aspernatur labore doloremque omnis veniam molestias? Eum, obcaecati vero.</p>



                            <div className='flex lg:justify-center'>
                                <div className="card lg:w-96 bg-base-100  ">
                                    <div className="card-body">

                                        <form >

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
                                            <input class='btn w-full max-w-xs' type="submit" value='login' />
                                        </form>


                                        {/* য */}



                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mb-12 lg:mb-0  my-14 " >
                            <img src="https://images.unsplash.com/photo-1587350855551-3c0be8c6c4aa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870" class=" w-full rounded-lg shadow-lg h-fit"
                                alt="" />
                        </div>
                    </div>
                </div>
            </section>



        </div>

    );
};

export default Purchase;