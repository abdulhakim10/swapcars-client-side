import Advertise from '../Advertise/Advertise';
import AllCategories from '../Category/AllCategories';
import UpcomingSale from '../UpcomingSale/UpcomingSale';

const Home = () => {
    return (
        <div className='bg-purple-100 p-6'>         
            <div className="flex justify-center p-6 m-6  mb-12">
                <div className="flex flex-col justify-center">

                    <div className="flex flex-col lg:flex-row max-w-7xl justify-center items-center p-2 space-y-3 w-full">
                        <div className="flex flex-col gap-1 md:items-start items-center justify-between  space-y-3 px-8">
                            <div className="text-5xl md:text-7xl  text-green-900">
                                Swapcars </div>
                            <div className=" uppercase md:ml-6 md:text-xl  text-green-900 ">
                            Don’t dream it. Drive it!</div>
                            <div className="text-lg ml-8">
                                @swapcars.org</div>
                        </div>
                        <div className="flex space-x-2 md:space-x-6 md:m-4">

                            <div className="md:w-20 w-10 h-60 md:h-96  overflow-hidden rounded-xl">
                                <img src="https://i.pinimg.com/200x/ca/4c/2a/ca4c2adb19721ea7cf0efb673e35663e.jpg" className="h-full w-full" alt="" />
                            </div>
                            <div className="md:w-60 w-28 h-60 md:h-96  overflow-hidden rounded-xl">
                                <img src="https://images.news18.com/telugu/uploads/2021/12/1640077894_1632992490-4005.jpg" className="h-full w-full" alt="" />

                            </div>
                            <div className="md:w-28  w-16 h-60 md:h-96  overflow-hidden rounded-xl">
                                <img src="https://www.carz4sale.in/photos-2/107/10748/maruti-suzuki-eco-1560914889-200.jpg" className="h-full w-full" alt="" />

                            </div>
                            <div className="md:w-20 w-10 h-60 md:h-96  overflow-hidden rounded-xl">
                                <img src="https://images.pexels.com/photos/9328727/pexels-photo-9328727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="h-full w-full" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
            <div className='lg:w-11/12 w-full mx-auto mb-12'>
                <Advertise></Advertise>
            </div>
            <div className='md:w-4/12 my-12 md:mx-auto'>
                <UpcomingSale/>
            </div>
        <div className='w-full mx-auto mb-12'>
        <AllCategories></AllCategories>
        </div>
        
        </div>
    );
};

export default Home;