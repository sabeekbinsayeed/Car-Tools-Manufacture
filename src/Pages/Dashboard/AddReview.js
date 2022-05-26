import userEvent from '@testing-library/user-event';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const replace = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAMvsHQrgzw-GuSPVkW4Bm0kQJiZZ4NRzL1g&usqp=CAU'
    const onSubmit = data => {
        console.log(data)
        const allreview = {
            name: user.displayName,
            profession: data.profession,
            review: data.review,

            img: data.img || replace || user.photoURL
            ,
            rating: data.rating


        }

        fetch('https://safe-plains-19618.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                //authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(allreview)
        })
            .then(res => res.json())
            .then(inserted => {
                console.log(inserted)
                console.log(allreview)
                toast.success('Review added')
                // if (inserted.insertedId) {
                //     toast.success('Doctor added successfully')
                //     reset();
                // }
                // else {
                //     toast.error('Failed to add the doctor');
                // }
            })

        console.log(allreview)
        console.log(user)

        // signInWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div className='h-screen lg:flex  justify-center mt-5 mx-auto'>


            <div className="lg:ml-12 card lg:w-96 bg-base-100  ">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Add a review</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Profession</span>

                            </label>
                            <input type="text" placeholder="Your Profession" className="input input-bordered w-full max-w-xs"
                                {...register("profession", {

                                    required: { value: true, message: 'review is required' }
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
                                <span className="label-text">Review</span>

                            </label>
                            <textarea
                                {...register("review", {

                                    required: { value: true, message: 'review is required' },

                                })}
                                class="textarea textarea-bordered" placeholder="Add your review"></textarea>



                            <label className="label">
                                {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message} </span>}


                            </label>
                        </div>


                        {/* ---- */}

                        {/* rating starts */}
                        {/* password starts */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Rating</span>

                            </label>
                            <textarea
                                {...register("rating", {

                                    required: { value: true, message: 'rating is required' },

                                })}
                                className="input input-bordered w-full max-w-xs" placeholder="Rating"></textarea>



                            <label className="label">
                                {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message} </span>}


                            </label>
                        </div>

                        {/* rating ends */}

                        {/* img url  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Image URL (optional)</span>

                            </label>
                            <input type="text" placeholder="Image URL" className="input input-bordered w-full max-w-xs"
                                {...register("img",)}

                            />


                        </div>

                        <input class='btn w-full bg-blue-600 hover:bg-white hover:text-black max-w-xs' type="submit" value='Add Review' />
                    </form>
                </div>
            </div>

            <div className='mx-auto' style={{ width: '50%' }}>
                <img src='https://st2.depositphotos.com/1005979/7918/i/950/depositphotos_79188038-stock-photo-review-magnifying-glass.jpg' className='w-50%'></img>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AddReview;