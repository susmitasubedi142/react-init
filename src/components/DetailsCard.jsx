import React from 'react'


export function DetailsCard({image, text, className }) {
  return (
    <>
    <div className='flex flex-col gap-[12px] items-center'>
        <div className={`flex border border-border-primary rounded-[8px] w-[304px] ${className} justify-center items-center`}>
            <img 
            src= {image} 
            className='w-[264px]'/>
        </div>

        <p className='text-text-primary text-center text-[16px]'>{text}</p>
    </div>
    </>
  )
}

