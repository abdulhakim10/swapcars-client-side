import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyWishlist = () => {
    const {user} = useContext(AuthContext);
    const {data : wishLists = []} = useQuery({
        queryKey: [],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/wishlist?email=${user?.email}`);
            const data = res.json();
            console.log(data);
            return data;
        }
    })
    return (
        <div className='m-12'>
            {wishLists?.length > 0 ?
        <>
        <h2 className="text-3xl mb-5 text-center text-green-800 font-semibold">My Wishlist: {wishLists.length}</h2>
        <div className="overflow-x-auto border-2 border-green-800 rounded-lg">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Location</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        wishLists?.map((wList, idx) => <tr key={wList._id}>
                            <th>{idx + 1}</th>
                            <td>{wList.title}</td>
                            <td>{wList.price}</td>
                            <td>{wList.location}</td>
                            <td><button className='btn btn-error btn-xs'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
        </>
        :
        <h1 className="text-5xl font-bold text-center text-red-600">You did'nt wList yet </h1>
        }
        </div>
    );
};

export default MyWishlist;