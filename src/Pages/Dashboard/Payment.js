import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';


import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L26i0A2gnAbv9dTvH38YULVDcS1XanH5jNBkg2EHouPRBHcAhQy1Fksf1RNgUiRIK9gh4RA4HSccWFOMlULpIWD00NJhQ12oP');
const Payment = () => {
    const { id } = useParams();
    const url = `https://safe-plains-19618.herokuapp.com/purchase/${id}`;
    const { data: purchase, isLoading } = useQuery(['purchase', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {purchase.name}</p>
                    <h2 class="card-title">Please Pay for {purchase.productName}</h2>

                    <p>Please pay: ${purchase.pricePrice}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm purchase={purchase} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;