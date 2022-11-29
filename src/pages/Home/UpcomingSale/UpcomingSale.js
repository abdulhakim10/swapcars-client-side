import React, {useState, useEffect} from 'react';

const UpcomingSale = () => {
    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setseconds] = useState()

    let interval;
    const countDown = () => {
        const destination = new Date('Feb 14, 2023').getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const different = destination - now;

            const days = Math.floor(different / (1000 * 60 * 60 * 24));
            const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000*60*60));
            const minutes = Math.floor(different % (1000 * 60 * 60) / (1000*60));
            const seconds = Math.floor(different % (1000 * 60) / 1000);
            
            if(destination < 0) clearInterval(interval.current)
            else{
                setDays(days);
                setHours(hours)
                setMinutes(minutes)
                setseconds(seconds)
            }
        })
    }

    useEffect(() => {
        countDown()
    })
    return (
        <div>
            <h2 className="text-4xl text-center text-green-900">Cyclone Is Coming</h2>
            <div className='clock__wrapper flex justify-center pt-10 items-center gap-3'>
            <div className="clock__data d-flex align-items-center gap-3">
 
                <div className='text-center'>
                    <h1 className=' text-4xl mb-2  border border-green-900 p-4 rounded-box bg-neutral-600 text-green-900'>{days}</h1>
                    <h4 className='text-xl text-center'>Days</h4>
                </div>
              
            </div>
            <div className="clock__data d-flex align-items-center gap-3">
                <div className='text-center'>
                    <h1 className='text-4xl mb-2 border border-green-900 p-4 rounded-box bg-neutral-600 text-green-900'>{hours}</h1>
                    <h4 className='text-xl text-center'>Hrs</h4>
                </div>
                
            </div>
            <div className="clock__data d-flex align-items-center gap-3">
                <div className='text-center'>
                    <h1 className='text-4xl mb-2 rounded-box border border-green-900 p-4  bg-neutral-600 text-green-900'>{minutes}</h1>
                    <h4 className='text-xl text-center'>Min</h4>
                </div>
            </div>
            <div className="clock__data d-flex align-items-center gap-3">
                <div className='text-center'>
                    <h1 className='text-4xl mb-2 border border-green-900 p-4 rounded-box bg-neutral-600 text-green-900'>{seconds}</h1>
                    <h4 className='text-xl text-center'>Sec</h4>
                </div>
              
            </div>
        </div>
        </div>
    );
};

export default UpcomingSale;