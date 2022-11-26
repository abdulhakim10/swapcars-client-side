import AllCategories from '../Category/AllCategories';

const Home = () => {
    return (
        <div>         
            <div class="flex justify-center p-8 m-12">
                <div class="flex flex-col justify-center">

                    <div class="flex flex-col lg:flex-row max-w-7xl justify-center items-center p-2 space-y-3 w-full">
                        <div class="flex flex-col md:items-start items-center justify-between  space-y-3 px-8">
                            <div class="text-5xl md:text-7xl font-bold ">
                                Hero Animation </div>
                            <div class="text-lg uppercase md:text-3xl   ">
                                Interactive Components</div>
                            <div class="text-xl md:text-3xl   ">
                                @tailblocks.org</div>
                        </div>
                        <div class="flex space-x-2 md:space-x-6 md:m-4">

                            <div class="md:w-20 w-10 h-60 md:h-96  overflow-hidden rounded-xl">
                                <img src="https://i.pinimg.com/200x/ca/4c/2a/ca4c2adb19721ea7cf0efb673e35663e.jpg" class="h-full w-full" alt="" />
                            </div>
                            <div class="md:w-60 w-28 h-60 md:h-96  overflow-hidden rounded-xl">
                                <img src="https://images.news18.com/telugu/uploads/2021/12/1640077894_1632992490-4005.jpg" class="h-full w-full" alt="" />

                            </div>
                            <div class="md:w-28  w-16 h-60 md:h-96  overflow-hidden rounded-xl">
                                <img src="https://www.carz4sale.in/photos-2/107/10748/maruti-suzuki-eco-1560914889-200.jpg" class="h-full w-full" alt="" />

                            </div>
                            <div class="md:w-20 w-10 h-60 md:h-96  overflow-hidden rounded-xl">
                                <img src="https://i.pinimg.com/200x/ca/4c/2a/ca4c2adb19721ea7cf0efb673e35663e.jpg" class="h-full w-full" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
        <AllCategories></AllCategories>
        </div>
    );
};

export default Home;