import React from 'react';

export function Pnavbar() {
  return (
    <div className='flex border bg-gray-600 justify-between'>
      <div className='flex'>
      <img src="images/logo.png" alt='logo image' className=' h-20 w-20 p-2 ' />
      <p className='text-white text-3xl p-4'>NavBar</p>
      </div>

      <div className='flex text-white  p-4 gap-4'>
        <p className='cursor:pointer text-xl hover:text-yellow-500'>Home</p>
        <p className='cursor:pointer text-xl hover:text-yellow-500'>About</p>
        <p className='cursor:pointer text-xl hover:text-yellow-500'>Services</p>
        <p className='cursor:pointer text-xl hover:text-yellow-500'>Contact</p>
        <button className='bg-black hover:bg-yellow-600 text-xl px-3 py-2'>Login</button>
      </div>
    </div>
  );
}
