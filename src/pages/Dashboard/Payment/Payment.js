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
        <div className='md:w-3/5 w-11/12 mt-12 mx-auto p-7 border-2 border-green-900 rounded-lg'>
            <div >
                <h2 className="md:text-xl text-md text-center">Please pay <strong>{booking.price}</strong> for <strong>{booking.item}</strong></h2>
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