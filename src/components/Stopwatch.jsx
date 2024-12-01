import React, { useRef, useState } from 'react';

export default function Stopwatch() {
    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const [isRunning, setIsRunning] = useState(false);

    const intervalRef = useRef(null);

    function handleStart() {
        if (!isRunning) {
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => {
                    let { hours, minutes, seconds } = prevTime;
                    seconds += 1;
                    if (seconds === 60) {
                        seconds = 0;
                        minutes += 1;
                    }
                    if (minutes === 60) {
                        minutes = 0;
                        hours += 1;
                    }
                    return { hours, minutes, seconds };
                });
            }, 1000);
        }
    }

    function handleStop() {
        clearInterval(intervalRef.current);
        setIsRunning(false);
    }
    function handelReset(){
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setTime({hours:0, minutes:0, seconds:0})

    }

    return (

        <div className='h-screen flex flex-col justify-center items-center'> 
            <div className='border  bg-gray-600 shadow-xl  text-center p-[48px] flex flex-col gap-[40px] items-center'>
             <p className='font-bold text-white text-2xl'>Time passed: {`${time.hours}:${time.minutes}:${time.seconds}`}</p>
            
            <div className='flex gap-6 '>
                <button onClick={handleStart} className='border bg-green-500 border-black p-2 text-xl'>Start</button>
                <button onClick={handleStop} className='border bg-yellow-500 border-black p-2'>Stop</button>
                <button onClick={handelReset} className='border bg-red-500 border-black p-2'>Reset</button>

            </div>
        </div>

        </div>
        
    );
}
