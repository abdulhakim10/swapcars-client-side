import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyBookings = () => {
    const {user} = useContext(AuthContext);
    const {data: myBookings = [], isLoading} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
           console.log(data)
           return data
        }
    })

    // if(isLoading){
    //     return <h2 className="text-3xl font-bold">Loading...</h2>
    // }
    
    return (
        <div className='m-12'>
        {myBookings?.length > 0 ?
        <>
        <h2 className="text-3xl mb-5 text-center font-semibold">My Bookings: {myBookings.length}</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Payment</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myBookings?.map((booking, idx) => <tr key={booking._id}>
                            <th>{idx + 1}</th>
                            <td>{booking.name}</td>
                            <td>{booking.phone}</td>
                            <td>{booking.item}</td>
                            <td>{booking.price}</td>
                            <td>
                                {
                                    booking.price && !booking.paid && <Link
                                        to={`/dashboard/payment/${booking._id}`}
                                    >
                                        <button className='btn btn-outline btn-xs'>Pay</button>
                                    </Link>
                                }
                                {
                                    booking.price && booking.paid && <span
                                        className='text-green-500 font-bold'
                                    >Paid</span>
                                }
                            </td>
                            <td><button className='btn btn-error btn-xs'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
        </>
        :
        <h1 className="text-5xl font-bold text-center text-red-600">You did'nt booking yet </h1>
        }
        
    </div>
    );
};

export default MyBookings;