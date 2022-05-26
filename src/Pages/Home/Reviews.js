import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://safe-plains-19618.herokuapp.com/review').then(res => res.json()).then(data => setReviews(data))
    }, [])
    return (
        <div>

            <div class="container my-12 px-6 mx-auto">

                <section class="mb-32 text-gray-800 text-center">

                    <h2 class="text-3xl font-bold mb-12 text-blue-600">Testimonials</h2>
                    <div className='grid lg:grid-cols-3 gap-x-3 gap-y-3 '>
                        {
                            reviews.slice(0).reverse().map(review =>
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