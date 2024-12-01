import { Forward, Pause, Play, RotateCcw } from 'lucide-react';
import React, { useRef } from 'react'



export default function Videouseref() {
  const videoRef = useRef();
  function handelPlay(){
    videoRef.current.play();

  }
  function handelPause(){
    videoRef.current.pause();

  }
  function handelRestart(){
    videoRef.current.currentTime=0;
    videoRef.current.play();
  }
  function handelForward(){
    videoRef.current.currentTime +=10;

  }
  function handelBackward(){
    videoRef.current.currentTime -=10;

  }
  return (
    <div className=' h-screen flex flex-col justify-center items-center'>
      <div className='flex gap-2'>
    <button className='  border px-6 py-2 bg-gray-500 text-white rounded-full' onClick={handelPlay}><Play /></button>
    <button className='border px-6 py-2 bg-red-800 text-white rounded-full' onClick={handelPause}><Pause /></button>
    <button className='border px-6 py-2 bg-red-800 text-white rounded-full' onClick={handelRestart}><RotateCcw /></button>
    <button className='border px-6 py-2 bg-red-800 text-white rounded-full' onClick={handelForward}> <Forward /></button>
    <button className='border px-6 py-2 bg-red-800 text-white  rounded-full' onClick={handelBackward}>Backward</button>


    </div> 
    <video ref={videoRef} controls className='w-[600px] '>  
    
    <source  src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    type='video/mp4'

    />
    
      </video>   
    </div>
  )
}
