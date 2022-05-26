import React from 'react';

const Info = () => {
    return (
        <div>
            <div class="container my-24 px-6 mx-auto">

                {/* <!-- Section: Design Block --> */}
                <section class="mb-32">
                    {/* <style>
                        @media (min-width: 992px) {
                            #cta - img - nml - 50 {
                            margin - left: 50px;
      }
    }
                    </style> */}

                    <div class="flex flex-wrap">
                        <div class="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0">
                            <div class="flex lg:py-12">
                                <img src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871" class="w-full rounded-lg shadow-lg"
                                    id="cta-img-nml-50" alt="" />
                            </div>
                        </div>

                        <div class="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                            <div
                                class="bg-blue-600 h-full rounded-lg p-6 lg:pl-12 text-white flex items-center text-center lg:text-left">
                                <div class="lg:pl-12">
                                    <h2 class="text-3xl font-bold mb-6">What are you waiting for?</h2>
                                    <p class="mb-6 pb-2 lg:pb-0">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, sint, repellat vel quo quisquam accusamus in qui at ipsa enim quibusdam illo laboriosam omnis. Labore itaque illum distinctio eum neque!
                                    </p>
                                    <button type="button" class="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Sign up now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Section: Design Block --> */}

            </div>
            {/* <!-- Container for demo purpose --> */}
        </div>
    );
};

export default Info;