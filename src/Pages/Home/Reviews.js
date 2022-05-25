import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review').then(res => res.json()).then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h1>{reviews.length}</h1>
            <div class="container my-24 px-6 mx-auto">

                <section class="mb-32 text-gray-800 text-center">

                    <h2 class="text-3xl font-bold mb-12">Testimonials</h2>
                    <div className='grid lg:grid-cols-3 gap-x-3 gap-y-3 '>
                        {
                            reviews.map(review =>
                                <Review review={review}></Review>
                            )
                        }
                    </div>

                </section>
            </div>

        </div>
    );
};

export default Reviews;