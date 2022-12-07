import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();
    return (
        <div>
            <div>
                <h2 className="text-xl">Please pay <strong>{booking.price}</strong> for <strong>{booking.item}</strong></h2>
            </div>
            <div>
                <Elements stripe={stripePromise} >
                <CheckoutForm booking={booking}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;