import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const CheckoutForm = ({ booking }) => {
    const {price, email, item, _id} = booking;
    const [clientSecret, setClientSecret] = useState('');

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        fetch('https://swapcars-assignment12-server-abdulhakim10.vercel.app/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({price})
        })
        .then(res => res.json())
        .then(data => {
            setClientSecret(data.clientSecret);
        })
        
    },[price])
    

    // const handleSubmit = async(event) => {
    //     event.preventDefault();

    //     if(!stripe  || !elements){
    //         return;
    //     }

    //     const card = elements.getElement(CardElement);
    //     if(card === null){
    //         return;
    //     }
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
          return;
        }
    
        const card = elements.getElement(CardElement);
    
        if (card === null) {
          return;
        }
    
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card,
        });
    
        if (error) {
          console.log(error);
        //   setCardError(error.message);
        } else {
        //   setCardError("");
        }
        // setSuccess("");
        // setProcessing(true);
    
        const { paymentIntent, error: confirmError } =
          await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: card,
              billing_details: {
                name: item,
                email: email,
              },
            },
          });
    
        if (confirmError) {
        //   setCardError(confirmError.message);
          return;
        }
        if (paymentIntent.status === "succeeded") {
          console.log("card info", card);
          // store payment info in database
          const payment = {
            price,
            transactionId: paymentIntent.id,
            email,
            bookingId: _id,
          };
          fetch("https://swapcars-assignment12-server-abdulhakim10.vercel.app/payments", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(payment),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                // setSuccess("Congrats! Your payment completed.");
                // setTransactionId(paymentIntent.id);
              }
            });
        }
        // setProcessing(false);
        console.log("paymentIntent", paymentIntent);
      };
      return (
        <>
          <form onSubmit={handleSubmit} className='border w-full mx-auto my-6 p-2 bg-white rounded-lg'>
            <CardElement
            
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
            <button
              className="btn btn-sm btn-outline mx-auto w-full mt-6"
              type="submit"
            //   disabled={!stripe || !clientSecret || processing}
            >
              Complete Payment
            </button>
          </form>
          {/* <p className="text-red-500">{cardError}</p> */}
          {/* {success && (
            <div>
              <p className="text-green-500">{success}</p>
              <p>
                Your transactionId:
                <span className="font-bold">{transactionId}</span>
              </p>
            </div>
          )} */}
        </>
      );
};

export default CheckoutForm;