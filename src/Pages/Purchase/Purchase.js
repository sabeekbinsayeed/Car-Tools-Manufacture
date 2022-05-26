import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import './Purchase.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Purchase = () => {
    const { id } = useParams();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'
    const navigate = useNavigate();
    let errorElement;
    const [tool, setTool] = useState({})
    const [errorQuantity, setErrorQuantity] = useState('')

    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {

        fetch(`http://localhost:5000/tools/${id}`).then(res => res.json()).then(data => setTool(data))
    }, [])
    const onSubmit = data => {
        console.log(data.quantity)
        if (!data.quantity) {

        }


        else if (data.quantity < tool.min_quantity) {
            console.log('error')
            setErrorQuantity('error: cannnot order less than minimum quantity ')
        }
        else if (data.quantity > tool.a_quantity) {
            setErrorQuantity('error: cannnot order more than available quantity')
        }

        else {
            console.log('done good')

            const purchase = {
                name: user.displayName,
                email: user.email,
                quantity: data.quantity,
                productName: tool.name,
                pricePrice: tool.price

            }
            console.log(purchase)
            // send to your database 
            fetch('http://localhost:5000/purchase', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    //authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(purchase)
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

        }




    };

    return (

        <div class="container px-6 mx-auto ">




            <section class="mb-32 text-gray-800 text-center lg:text-left">
                <div class="px-6 py-10 md:px-12 ">
                    <div class="grid lg:grid-cols-2 lg:gap-x-12  ">
                        <div class="mb-12 lg:mb-0  ">
                            <h1 className='text-2xl font-extrabold lg:text-center '>{tool.name}</h1>
                            <h1 className='text-xl font-bold my-4 lg:text-center
                            '>300 Tk</h1>
                            <h1 className='lg:text-center'> <span className='font-bold'>Quantity Available</span> :{tool.a_quantity}</h1>
                            <h1 className='lg:text-center'> <span className='font-bold'>Minimum allowed</span>: {tool.min_quantity}</h1>

                            <p className='mt-6 italic'>{tool.description}</p>



                            <div className='flex lg:justify-center'>
                                <div className="card lg:w-96 bg-base-100  ">
                                    <div className="card-body">

                                        <form onSubmit={handleSubmit(onSubmit)}>

                                            {/* name starts */}

                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text">Name</span>

                                                </label>
                                                <input type="text" value={user.displayName} disabled className="input input-bordered w-full max-w-xs"


                                                />

                                                <label className="label">




                                                </label>
                                            </div>

                                            {/* name ends */}

                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text">Email</span>

                                                </label>
                                                <input type="email" value={user.email} disabled className="input input-bordered w-full max-w-xs"


                                                />

                                                <label className="label">




                                                </label>
                                            </div>






                                            {/* ---- */}
                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text">Quantity</span>

                                                </label>
                                                <input required type="text" placeholder={`Minimum quantity ${tool.min_quantity}`} className="input input-bordered w-full max-w-xs"
                                                    {...register("quantity", {

                                                        required: { value: true, message: 'quantity is required' },

                                                    })}

                                                />

                                                <label className="label">
                                                    {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message} </span>}



                                                </label>
                                            </div>

                                            <p className='text-red-500'><small>{errorQuantity}</small></p>

                                            {/* end */}

                                            <p className='text-red-500'><small>{errorElement}</small></p>
                                            <input class='btn w-full max-w-xs' type="submit" value='login'

                                            />


                                        </form>


                                        {/* য */}



                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mb-12 lg:mb-0  my-14  " >
                            <img src={tool.img} class="hover:scale-110 transition duration-300 ease-in-out w-full rounded-lg shadow-lg h-fit"
                                alt="" />
                            {/* <div
                                class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs"
                                data-mdb-ripple="true" data-mdb-ripple-color="light"
                            >
                                <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" class="max-w-xs" alt="Louvre" />
                                <a href="#!">
                                    <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out" style="background-color: rgba(251, 251, 251, 0.2)"></div>
                                </a>
                            </div> */}
                        </div>
                    </div>
                    <ToastContainer />
                </div >
            </section >



        </div >

    );
};

export default Purchase;