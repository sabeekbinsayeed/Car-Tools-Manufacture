import React from 'react';

const Video = () => {
    return (
        <div>
            <div class="container my-24 px-6 mx-auto">

                {/* <!-- Section: Design Block --> */}
                <section class="mb-32 text-gray-800 background-radial-gradient">
                    {/* <style>
                        .background-radial-gradient {
                            background - color: hsl(218, 41%, 15%);
                        background-image: radial-gradient(650px circle at 0% 0%,
                        hsl(218, 41%, 35%) 15%,
                        hsl(218, 41%, 30%) 35%,
                        hsl(218, 41%, 20%) 75%,
                        hsl(218, 41%, 19%) 80%,
                        transparent 100%),
                        radial-gradient(1250px circle at 100% 100%,
                        hsl(218, 41%, 45%) 15%,
                        hsl(218, 41%, 30%) 35%,
                        hsl(218, 41%, 20%) 75%,
                        hsl(218, 41%, 19%) 80%,
                        transparent 100%);
    }
                    </style> */}

                    <div class="px-6 py-12 md:px-12 text-center lg:text-left">
                        <div class="container mx-auto">
                            <div class="grid lg:grid-cols-2 gap-12 flex items-center">
                                <div class="mt-12 lg:mt-0">
                                    <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 text-blue-600"
                                    // style="color: hsl(218, 81%, 95%)"
                                    >
                                        Are you ready <br /><span
                                        //  style="color: hsl(218, 81%, 75%)"
                                        >for an adventure?</span>
                                    </h1>
                                    <p class="text-lg"
                                    // style="color: hsl(218, 81%, 95%)"
                                    >

                                        See how we manufactue products. We focus on quality and customer satisfaction. For more videos see our youtube channel.
                                    </p>
                                </div>
                                <div class="mb-12 lg:mb-0">
                                    <div class=" embed-responsive embed-responsive-16by9 relative w-full  rounded-lg shadow-lg"
                                    // style="padding-top: 56.25%"
                                    >
                                        <iframe className=' lg:show lg:h-80 lg:w-full w-50 h-60' src="https://www.youtube.com/embed/P7fi4hP_y80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Section: Design Block --> */}

            </div >
            {/* <!-- Container for demo purpose --> */}
        </div >
    );
};

export default Video;