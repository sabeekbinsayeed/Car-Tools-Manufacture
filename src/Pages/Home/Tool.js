import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Tool = props => {
    const { name, price, img, a_quantity, min_quantity, _id, description } = props.tool;


    const navigate = useNavigate('');
    // const handleNavigation = id => {
    //     console.log('hello');
    //     navigate(`/inventory/${id}`)
    // }


    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl hover:scale-110 transition duration-300 ease-in-out" />
            </figure>
            {/* <div class="card-body items-center  text-center"> */}
            <div class="card-body  ">
                <h2 className="items-center text-2xl  ">{name}</h2>
                <h4 className="items-center text-xl text-red-500">Available quantity: {a_quantity}</h4>

                <p className=' text-sm divide-y'>{description}</p>
                <hr className='bg-black'></hr>
                <div className='flex justify-around items-center '>
                    <p> <span className='text-car-800 font-bold'>Price: </span> {price}</p>
                    <button onClick={() => navigate(`/purchase/${_id}`)} class="btn btn-secondary ">Purchase</button>
                </div>
                <div class="items-center">

                </div>
            </div>
        </div>
    );
};

export default Tool;