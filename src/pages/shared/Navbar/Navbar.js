import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)

    const handleLogOut = async () => {
        await logOut();
    }

    const menuItems = {

    }
    return (
        <div>
            <div className="flex justify-center ">
                <div className="self-center top-0 w-full max-w-7xl ">
                    <div className="flex justify-between items-center text-gray-700">
                        <div className="mx-2 my-4 ">
                            <h2 name="logo-pwa" className="text-5xl text-blue-600 hover:text-stone-600">Swapcars</h2>
                        </div>
                        <ul className="hidden md:flex items-center text-[18px] font-semibold pr-10">
                            <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"><Link
                                to="/">Home</Link></li>
                            <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"><Link to="#">{user?.displayName}</Link></li>
                            <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"><Link to="#">Our
                                Services</Link></li>
                            <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"><Link
                                to="#">Portfolio</Link></li>
                            <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"><Link
                                to="#">Contact</Link></li>
                            {
                                user?.uid ?
                                    <li onClick={handleLogOut}
                                        className="text-blue-600 hover:text-white hover:bg-blue-600 mx-4 my-2 border-2 border-blue-600 px-3 py-1 rounded-lg ">
                                        LogOut</li>
                                    :
                                    <>
                                        <li
                                            className="text-blue-600 hover:text-white hover:bg-blue-600 mx-4 my-2 border-2 border-blue-600 px-3 py-1 rounded-lg ">
                                            <Link to="/login">LogIn</Link></li>
                                        <li
                                            className="text-white bg-blue-600 px-3 py-1 rounded-lg mx-4 my-1 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600">
                                            <Link to="/signup">SignUp</Link></li>
                                    </>
                            }
                        </ul> <button className="block p-3 mx-10 md:hidden hover:bg-gray-200 rounded-xl group">
                            <div className="w-5 my-[3px] h-[3px] bg-gray-600 mb-[2px]"></div>
                            <div className="w-5 my-[3px] h-[3px] bg-gray-600 mb-[2px]"></div>
                            <div className="w-5 my-[3px] h-[3px] bg-gray-600"></div>
                            <div
                                className="absolute top-0 -right-full opacity-0 h-screen w-[60%] border bg-white group-focus:right-0 group-focus:opacity-100 transition-all ease-in duration-300 ">
                                <ul className="flex flex-col items-center text-[18px] pt-[60px]">
                                    <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"><Link
                                        to="#">Home</Link></li>
                                    <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"><Link
                                        to="#">About Us</Link></li>
                                    <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"><Link
                                        to="#">Our Services</Link></li>
                                    <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"><Link
                                        to="#">Portfolio</Link></li>
                                    <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"><Link
                                        to="#">Contact</Link></li>
                                    {
                                        user?.uid ?
                                            <li onClick={handleLogOut}
                                                className="text-blue-600 hover:text-white hover:bg-blue-600 mx-4 my-2 border-2 border-blue-600 px-3 py-1 rounded-lg ">
                                                LogOut</li>
                                            :
                                            <>
                                                <li
                                                    className="text-blue-600 hover:text-white hover:bg-blue-600 mx-4 my-2 border-2 border-blue-600 px-3 py-1 rounded-lg ">
                                                    <Link to="/login">LogIn</Link></li>
                                                <li
                                                    className="text-white bg-blue-600 px-3 py-1 rounded-lg mx-4 my-1 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600">
                                                    <Link to="/signup">SignUp</Link></li>
                                            </>
                                    }
                                </ul>
                            </div>
                        </button>
                    </div>

                </div>
            </div>
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </div>
    );
};

export default Navbar;