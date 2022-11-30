import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { ImBin } from 'react-icons/im';


const AllBuyers = () => {

    const {data: buyers = [], refetch} = useQuery({
        queryKey: ['allbuyers'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/allbuyers', {
              headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
            });
            const data = await res.json();
            return data;
        }
    })


    
    // make admin handler
    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
              toast.success('Make Admin successfully');
              refetch();
            }
        })
    }


    // delete buyer
    const handleDeleteBuyer = id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged === true){
                  toast.success('Deleted successfully');
                  refetch();
              }
            })
    }
    return (
        <div className='m-12'>
      <h2 className="text-3xl font-semibold text-green-800 text-center mb-5">All Buyers: {buyers?.length}</h2>

      <div className="overflow-x-auto w-full border-2 border-green-800 rounded-lg">
        <table className="table w-full">

          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              buyers?.map((buyer, idx) => <tr>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={buyer.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{buyer.name}</div>

                    </div>
                  </div>
                </td>
                <td>
                  {buyer.email}
                </td>
                <td>
                  <span className="badge badge-ghost font-semibold badge-lg">{buyer.type}</span>
                </td>
                <td>
                  {buyer.role !== 'admin' && <button onClick={() => handleMakeAdmin(buyer._id)} className="btn btn-success btn-xs">Make Admin</button> }
                </td>
                
                <td><ImBin onClick={() => handleDeleteBuyer(buyer._id)} className='text-2xl text-red-600'/></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default AllBuyers;