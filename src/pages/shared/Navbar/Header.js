import { Avatar, Button, Dropdown, Navbar, ToggleSwitch } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';


const Header = () => {
  const {user,logOut} = useContext(AuthContext);

  const handleLogOut = () => {
     logOut()
     .then(() => {})
     .catch(err => console.error(err))
  }

  const menuItems = <>
    <li className='text-lg rounded-md hover:text-green-600 hover:bg-gray-200 px-3 py-1'><Link to='/'> Home</Link></li>
    <li className='text-lg rounded-md hover:text-green-600 hover:bg-gray-200 px-3 py-1'><Link to='/dashboard'>Dashboard</Link></li>
    <li className='text-lg rounded-md hover:text-green-600 hover:bg-gray-200 px-3 py-1'><Link to='/blog'>Blog</Link></li>
    <li className='text-lg rounded-md hover:text-green-600 hover:bg-gray-200 px-3 py-1'><Link to='/addservice'>Add Service</Link></li>
    <>{
      user?.uid &&
    
    <li>
      <button onClick={handleLogOut} className='btn btn-outline btn-sm'>Log Out</button>
    </li>
   
    }</>
  </>
    return (
        <div className='border shadow p-1 rounded-lg'>
           <Navbar
           className='bg-gray-100'
  fluid={true}
  rounded={true}
>
<label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
  <Navbar.Brand>
    
    <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
        Swapcars
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
  {!user?.uid &&
  <>
  <button className='mr-2 mt-2 btn btn-outline btn-sm'><Link to='/login'>Login</Link></button>
    {/* <button className='mr-2 mt-2 btn btn-outline btn-sm'><Link to='/signup'>Sign Up</Link></button> */}
  </> 

  }
    
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img={user?.photoURL} rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          {user?.email ?
          user?.displayName
          :
          'Profile Name'
          }
        </span>
        <span className="block truncate text-sm font-medium">
        {user?.email ?
          user?.email
          :
          'user@email'
          }
        </span>
      </Dropdown.Header>
      <Dropdown.Divider />
      <Dropdown.Item onClick={handleLogOut}>
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    {menuItems}
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Header;