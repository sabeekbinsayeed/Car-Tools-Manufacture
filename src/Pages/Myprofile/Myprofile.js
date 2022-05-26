import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';
const Myprofile = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    console.log(user, 'form profile')

    const [info, setInfo] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/profile?email=${user.email}`).then(res => res.json()).then(data => setUserInfo(res))

    // }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/profile?email=${user?.email}`).then(res => res.json()).then(data => { setInfo(data); console.log(data) })
    }, [])

    if (loading) {
        return <Loading></Loading>
    }

    // const { data: userInfo, isLoading, refetch } = useQuery('users', () => fetch(`http://localhost:5000/profile?email=${user.email}`, {
    //     // headers: {
    //     //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //     // }
    // }).then(res => { res.json(); console.log(userInfo) }));

    // if (isLoading) {
    //     return <Loading></Loading>
    // }



    const onSubmit = data => {
        console.log(data)
        const user = {
            name: data?.name,
            education: data.education,
            email: data?.email,
            phone: data.phone,
            location: data.location,
            linkedin: data.linkedin,


        }

        console.log(user)

        fetch(`http://localhost:5000/profile/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                //authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(inserted => {
                console.log(inserted)
                toast.success('sucessfully done')



                // }
            })


    }
    return (
        <div>
            <h1>Current info</h1>
            {/* <h2>{userInfo.name}</h2> */}
            {/* <h2>{userInfo.location}</h2> */}
            {/* <h2>{userInfo.phone}</h2> */}

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> Name</span>

                    </label>
                    <input type="text" value={user?.displayName} className="input input-bordered w-full max-w-xs"
                        {...register("name", {

                            required: { value: true, message: 'name is required' },

                        })}

                    />

                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message} </span>}



                    </label>
                </div>



                {/* email starts */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>

                    </label>
                    <input type="email" value={user?.email} placeholder="Price" className="input input-bordered w-full max-w-xs"
                        {...register("email", {

                            required: { value: true, message: 'email is required' },

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
                        <span className="label-text">Education</span>

                    </label>
                    <input type="text" placeholder="Your education" className="input input-bordered w-full max-w-xs"
                        {...register("education", {

                            required: { value: true, message: 'education is required' },

                        })}

                    />

                    <label className="label">
                        {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message} </span>}


                    </label>
                </div>


                {/* ---- */}



                {/* Phone  starts */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Phone</span>

                    </label>
                    <input type="text" placeholder="Your number" className="input input-bordered w-full max-w-xs"
                        {...register("phone", {

                            required: { value: true, message: ' phone is required' },

                        })}

                    />

                    <label className="label">
                        {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message} </span>}


                    </label>
                </div>


                {/* ---- */}



                {/* linkedin */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Linkedin Profile</span>

                    </label>
                    <input type="text" placeholder=" Linkedin profile link" className="input input-bordered w-full max-w-xs"
                        {...register("linkedin", {

                            required: { value: true, message: ' linkedin is required' },

                        })}

                    />

                    <label className="label">
                        {errors.linkedin?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedin.message} </span>}


                    </label>
                </div>


                {/* ---- */}


                {/* location quantity starts */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">location </span>

                    </label>
                    <input type="text" placeholder=" location" className="input input-bordered w-full max-w-xs"
                        {...register("location", {

                            required: { value: true, message: ' location is required' },

                        })}

                    />

                    <label className="label">
                        {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location.message} </span>}


                    </label>
                </div>


                {/* ---- */}


                <p className='text-red-500'></p>
                <input class='btn  btn-secondary w-full max-w-xs' type="submit" value='Add Product' />
            </form>
            <ToastContainer />
        </div>
    );
};

export default Myprofile;