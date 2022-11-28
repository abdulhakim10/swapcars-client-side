import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext);
    const {data: myCars = [], refetch } = useQuery({
        queryKey: [],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/sellercar?email=${user.email}`);
            const data = await res.json();
            return data;
        }
    })

    const handleAdvertise = id => {
        fetch(`http://localhost:5000/cars/advertise/${id}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            refetch();
        })
    }


     // product delete handler
     const handleProductDelete = id => {
        fetch(`http://localhost:5000/cars/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            refetch();
        })
    }


    return (
        <div className='m-12 '>
            <h2 className="text-3xl font-semibold text-green-800 mb-4 text-center">MyProducts: {myCars?.length}</h2>
            <div className="overflow-x-auto border-2 border-green-800 rounded-lg">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Id</th>
                        <th>Condition</th>
                        <th>Price</th>
                        <th>Advertised</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myCars?.map((myCar, idx) => 
                             
                            <tr key={myCar._id}>
                            <th>{idx + 1}</th>
                            <td>{myCar.title}</td>
                            <td>{myCar._id}</td>
                            <td>{myCar.condition}</td>
                            <td>{myCar.resale_price}</td>
                            <td>
                            {myCar.item_status !== 'advertise' && <button onClick={() => handleAdvertise(myCar._id)} className='btn btn-success btn-xs'>Add</button>}
                            </td>
                            <td>
                            <button onClick={() => handleProductDelete(myCar._id)} className='btn btn-error btn-xs'>Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default MyProducts;