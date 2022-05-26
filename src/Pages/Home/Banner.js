import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
                <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div class="carousel-inner relative w-full overflow-hidden">
                    <div class="carousel-item active relative float-left w-full">
                        <img
                            src="https://images.unsplash.com/photo-1580654712603-eb43273aff33?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"
                            class="block w-full lg:h-[500px]"
                            // style={{ height: '450px' }}
                            alt="..."
                        />
                        <div class="carousel-caption hidden md:block absolute text-center">
                            <h5 class="text-xl text-white ">Get details information</h5>
                            <button onClick={() => { navigate('/dashboard') }} className='bg-blue-500 btn  mt-1'>Visit dashboard</button>

                        </div>
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <img
                            src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928"
                            class="block w-full lg:h-[500px]"
                            // style={{ height: '450px' }}
                            alt="..."
                        />
                        <div class="carousel-caption hidden md:block absolute text-center ">


                            <h5 class="text-xl text-white ">Gather knowledge from us</h5>
                            <button onClick={() => { navigate('/blogs') }} className='bg-blue-500 btn mt-1'>Reads Blogs</button>

                        </div>
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <img
                            src="https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
                            class="block w-full lg:h-[500px]"
                            // style={{ height: '450px' }}
                            alt="..."
                        />
                        <div class="carousel-caption hidden md:block absolute text-center">
                            <h5 class="text-xl text-white ">Your detail information</h5>
                            <button onClick={() => { navigate('/portfolio') }} className='bg-blue-500 btn mt-1'>Your portfolio</button>
                        </div>
                    </div>
                </div>
                <button
                    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;