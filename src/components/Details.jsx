import React from 'react'
import { DetailsCard } from './DetailsCard'
import { DetailsCardData } from '../Data';

export function Details() {
  return (
    <>
    <div className='flex  flex-col gap-[32px]  py-[32px] px-[112px]'>
      <p className='text-text-primary text-center text-[24px]'>Your’s details</p>
      <div className='grid grid-cols-3 gap-y-[48px] w-full justify-center items-center'>
        { DetailsCardData.map((carddata)=>{
          return (
            <DetailsCard 
            key= {carddata.id}
            image = {carddata.image} 
            text={carddata.text}
            className={carddata.className}/>
          );
        })}
      </div>
    </div>
    </>
  )
}