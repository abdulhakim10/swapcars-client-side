import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import useTaker from '../hooks/useTaker';
import Header from '../pages/shared/Navbar/Header';


const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user.email);
  const [isSeller] = useSeller(user.email);
  const [isTaker] = useTaker(user?.email);
    return (
        <div>
            <Header></Header>
            
            <div className="drawer drawer-end drawer-mobile bg-green-100">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
  <Outlet></Outlet>  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      
     
     {isTaker &&  <li ><Link to='/dashboard'>My Orders</Link></li>}
    

      {
      isSeller && 
      <>
      <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
      <li><Link to='/dashboard/myproducts'>My Products</Link></li>
      </>
      }

      {isAdmin &&
        <>
        <li><Link to='/dashboard/allusers'>All Users</Link></li>
      <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
      <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
      </>}
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;