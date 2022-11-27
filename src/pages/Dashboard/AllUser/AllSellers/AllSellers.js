import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {

  const { data: sellers = [], refetch } = useQuery({
    queryKey: ['allsellers'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/allsellers');
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
        refetch();
    })
}
  const handleDeleteSeller = seller => {
    fetch(`http://localhost:5000/users/${seller._id}`, {
      method: 'DELETE',
      headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
  })
      .then(res => res.json())
      .then(data => {
          console.log(data)
          refetch();
      })
  }
  return (
    <div className='m-12'>
      <h2 className="text-3xl font-semibold text-center mb-4">All Sellers: {sellers?.length}</h2>

      <div className="overflow-x-auto w-full">
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
              sellers?.map((seller, idx) => <tr>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={seller.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{seller.name}</div>

                    </div>
                  </div>
                </td>
                <td>
                  {seller.email}
                </td>
                <td>
                  <span className="badge badge-ghost font-semibold badge-lg">{seller.type}</span>
                </td>
                <th>
                  {seller.role !== 'admin' && <button onClick={() => handleMakeAdmin(seller._id)} className="btn btn-success btn-xs">Make Admin</button>}
                </th>
                <th>
                  <button onClick={() => handleDeleteSeller(seller)} className="btn btn-error btn-xs">Delete</button>
                </th>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;