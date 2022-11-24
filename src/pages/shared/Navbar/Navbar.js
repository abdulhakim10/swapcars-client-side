import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
          <div class="flex justify-center ">
 <div class="self-center top-0 w-full max-w-7xl ">
     <div class="flex justify-between items-center text-gray-700">
         <div class="mx-2 my-4 ">
             <ion-icon name="logo-pwa" class="text-5xl text-blue-600 hover:text-stone-600">Assignment-12</ion-icon>
         </div>
         <ul class="hidden md:flex items-center text-[18px] font-semibold pr-10">
             <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"><Link
                     to="#">Home</Link></li>
             <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"><Link to="#">About
                     Us</Link></li>
             <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"><Link to="#">Our
                     Services</Link></li>
             <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"><Link
                     to="#">Portfolio</Link></li>
             <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"><Link
                     to="#">Contact</Link></li>
             <li
                 class="text-blue-600 hover:text-white hover:bg-blue-600 mx-4 my-1 border-2 border-blue-600 px-2 rounded-2xl ">
                 <Link to="#">LogIn</Link></li>
             <li
                 class="text-white bg-blue-600 px-2 rounded-2xl mx-4 my-1 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600">
                 <Link to="#">SignUp</Link></li>
         </ul> <button class="block p-3 mx-10 md:hidden hover:bg-gray-200 rounded-xl group">
             <div class="w-5 my-[3px] h-[3px] bg-gray-600 mb-[2px]"></div>
             <div class="w-5 my-[3px] h-[3px] bg-gray-600 mb-[2px]"></div>
             <div class="w-5 my-[3px] h-[3px] bg-gray-600"></div>
             <div
                 class="absolute top-0 -right-full opacity-0 h-screen w-[60%] border bg-white group-focus:right-0 group-focus:opacity-100 transition-all ease-in duration-300 ">
                 <ul class="flex flex-col items-center text-[18px] pt-[60px]">
                     <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"><Link
                             to="#">Home</Link></li>
                     <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"><Link
                             to="#">About Us</Link></li>
                     <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"><Link
                             to="#">Our Services</Link></li>
                     <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"><Link
                             to="#">Portfolio</Link></li>
                     <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"><Link
                             to="#">Contact</Link></li>
                     <li
                         class="text-blue-600 hover:text-white hover:bg-blue-600 mx-4 my-1 border-2 border-blue-600 px-2 rounded-2xl ">
                         <Link to="#">LogIn</Link></li>
                     <li
                         class="text-white bg-blue-600 px-2 rounded-2xl mx-4 my-1 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600">
                         <Link to="#">SignUp</Link></li>
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