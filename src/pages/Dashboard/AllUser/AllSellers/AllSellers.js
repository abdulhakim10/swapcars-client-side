import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {

  const { data: sellers = [], refetch } = useQuery({
    queryKey: ['allsellers'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/allsellers', {
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
        toast.success('Make Admin successfully');
        refetch();
      })
  }


  // // verify seller
  const handleVerifySeller = email => {
    fetch(`http://localhost:5000/vrifiedseller?email=${email}`,{
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      toast.success('Verified');
      refetch();
    })
  }

  // delete seller
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
        toast.success('Deleted successfully');
        refetch();
      })
  }
  return (
    <div className='m-12'>
      <h2 className="text-3xl text-green-800 font-semibold text-center mb-4">All Sellers: {sellers?.length}</h2>

      <div className="overflow-x-auto w-full border-2 border-green-800 rounded-lg">
        <table className="table w-full">

          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin</th>
              <th>Verify</th>
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
                <td>
                  {seller.role !== 'admin' && <button onClick={() => handleMakeAdmin(seller._id)} className="btn btn-success btn-xs">Make Admin</button>}
                </td>
                <td>
                  {seller.status !== 'verified' ?
                    <button onClick={() => handleVerifySeller(seller.email)} className="btn btn-success btn-xs">Verify</button>
                    :
                    <p className='badge badge-success'>Verified</p>
                  }
                </td>
                <td>
                  <button onClick={() => handleDeleteSeller(seller)} className="btn btn-error btn-xs">Delete</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;