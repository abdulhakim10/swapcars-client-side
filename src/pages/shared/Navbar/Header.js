import { Avatar, Button, Dropdown, Navbar, ToggleSwitch } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';


const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(err => console.error(err))
  }

  const menuItems = <>
    <li className='text-lg rounded-md hover:text-green-600 hover:bg-gray-200 px-3 py-1'><Link to='/'> Home</Link></li>
    {user?.uid && <li className='text-lg rounded-md hover:text-green-600 hover:bg-gray-200 px-3 py-1'><Link to='/dashboard'>Dashboard</Link></li>}
    <li className='text-lg rounded-md hover:text-green-600 hover:bg-gray-200 px-3 py-1'><Link to='/blog'>Blog</Link></li>
    {/* <li className='text-lg rounded-md hover:text-green-600 hover:bg-gray-200 px-3 py-1'><Link to='/addservice'>Add Service</Link></li> */}
  </>
  return (
    <div className='border shadow p-1 rounded-lg'>
      <Navbar
        className='bg-gray-100'
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand>

          <span className="self-center whitespace-nowrap text-green-900 text-4xl font-semibold dark:text-white">
            Swapcars
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">

          {
            !user?.uid ?
              <button className='mr-4 mt-1 btn btn-outline btn-sm'><Link to='/login'>Login</Link></button>
              :
              <button onClick={handleLogOut} className='mr-4 mt-1 btn btn-outline btn-sm'>Log Out</button>
          }

          <Dropdown
            arrowIcon={false}
            inline={true}
            label={<Avatar alt="User settings" img={user?.photoURL} rounded={true} />}
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
            {user?.uid &&
            <>
              <Link to='/dashboard'>
                <Dropdown.Item>
                  Dashboard
                </Dropdown.Item>
              </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogOut}>
              Sign out
            </Dropdown.Item></>}
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