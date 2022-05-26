import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// add products page
const ManageProducts = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const tools = {
            name: data.name,
            price: data.price,
            a_quantity: data.aquantity,
            min_quantity: data.minquantity,
            description: data.description,
            img: data.img,

        }


        console.log(tools)
        fetch('http://localhost:5000/tools', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                //authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(tools)
        })
            .then(res => res.json())
            .then(inserted => {
                console.log(inserted)
                toast.success('sucessfully done')


                // if (inserted.insertedId) {
                //     toast.success('Doctor added successfully')
                //     reset();
                // }
                // else {
                //     toast.error('Failed to add the doctor');
                // }
            })






    };
    return (
        <div>
            <div className="  bg-base-100 shadow-xl lg:flex flex-reverse">

                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-blue-500">Add Products</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Name</span>

                            </label>
                            <input type="text" placeholder="Add Product" className="input input-bordered w-full max-w-xs"
                                {...register("name", {

                                    required: { value: true, message: 'name is required' },

                                })}

                            />

                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message} </span>}



                            </label>
                        </div>



                        {/* price starts */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price</span>

                            </label>
                            <input type="text" placeholder="Price" className="input input-bordered w-full max-w-xs"
                                {...register("price", {

                                    required: { value: true, message: 'password is required' },

                                })}

                            />

                            <label className="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message} </span>}


                            </label>
                        </div>


                        {/* ---- */}




                        {/* min quantity starts */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Minimum Quantity</span>

                            </label>
                            <input type="text" placeholder="Min Quantity" className="input input-bordered w-full max-w-xs"
                                {...register("minquantity", {

                                    required: { value: true, message: 'Min quantity is required' },

                                })}

                            />

                            <label className="label">
                                {errors.minquantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minquantity.message} </span>}


                            </label>
                        </div>


                        {/* ---- */}



                        {/* available quantity starts */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>

                            </label>
                            <input type="text" placeholder="Available Quantity" className="input input-bordered w-full max-w-xs"
                                {...register("aquantity", {

                                    required: { value: true, message: ' quantity is required' },

                                })}

                            />

                            <label className="label">
                                {errors.aquantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.aquantity.message} </span>}


                            </label>
                        </div>


                        {/* ---- */}



                        {/* description quantity starts */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Description</span>

                            </label>
                            <input type="text" placeholder=" Description" className="input input-bordered w-full max-w-xs"
                                {...register("description", {

                                    required: { value: true, message: ' description is required' },

                                })}

                            />

                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message} </span>}


                            </label>
                        </div>


                        {/* ---- */}


                        {/* Image URL quantity starts */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Image URL</span>

                            </label>
                            <input type="text" placeholder=" Description" className="input input-bordered w-full max-w-xs"
                                {...register("img", {

                                    required: { value: true, message: ' image is required' },

                                })}

                            />

                            <label className="label">
                                {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message} </span>}


                            </label>
                        </div>


                        {/* ---- */}


                        <p className='text-red-500'></p>
                        <input class='btn  bg-white text-black hover:bg-blue-600 hover:text-white w-full max-w-xs' type="submit" value='Add Product' />
                    </form>



                </div>
                <div>
                    <img className='w-50' src='https://images.unsplash.com/photo-1589750602846-60028879da9b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZSUyMGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500'></img>
                </div>

                <ToastContainer />
            </div>
        </div>
    );
};

export default ManageProducts;