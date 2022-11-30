import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const BuyModal = ({modalInfo}) => {
    const {title, resale_price} = modalInfo;
    const {user} = useContext(AuthContext);


    const handleModalSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const item = form.item.value
        const price = form.price.value
        const phone = form.phone.value
        const location = form.location.value

        const booking ={ 
            name, 
            email, 
            item, 
            phone, 
            price, 
            location
        };

        

        fetch('https://swapcars-assignment12-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success('Booking successful')
            
        })
        form.reset();
    }
    return (
        <div>
<input type="checkbox" id="buy-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="buy-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <form onSubmit={handleModalSubmit}>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <input type="text" name='name' defaultValue={user.displayName} disabled className="input input-bordered w-full max-w-xs" />
</div>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input type="email" name='email' defaultValue={user.email} disabled className="input input-bordered w-full max-w-xs" />
</div>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Item Name</span>
  </label>
  <input type="text" name='item' defaultValue={title} disabled className="input input-bordered w-full max-w-xs" />
</div>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Price</span>
  </label>
  <input type="text" name='price' defaultValue={resale_price} disabled className="input input-bordered w-full max-w-xs" />
</div>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Phone Number</span>
  </label>
  <input type="text" name='phone' required min="11"  className="input input-bordered w-full max-w-xs" />
</div>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Meeting Location</span>
  </label>
  <input type="text" name='location' className="input input-bordered w-full max-w-xs" />
</div>
<input type="submit" className='btn btn-outline w-full mt-4' />
    </form>
  </div>
</div>
        </div>
    );
};

export default BuyModal;