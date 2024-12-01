import React from 'react'
import { Link } from 'react-router-dom'

export  function Blog({post}) {
  
  return (
    // <div className=' flex flex-col border-2 border-gray-500 w-1/2 p-6 rounded-xl gap-4 '>
    //     <p className="text-2xl font-bold">{post.title} </p>
    //     <p className="text-2xl font-bold">{post.description}</p>
    //     <p className="text-2xl font-bold">Published on:{post.date}</p>

          

          
           

    // </div>
    <Link to={`/news/${post.id}`}>
      <div className='flex  gap-[16px] w-full h-[194px] p-[16px] shadow-md rounded-[6px] items-center hover:shadow-xl'>
        <div className='w-[288px] h-[162px] flex-shrink-0'>
          <img src={post.image} alt={post.title} className='w-full h-full object-cover rounded-[6px]'></img>
        </div>
        <div className='flex flex-col gap-[16px] '>
          <div className='flex flex-col gap-[8px] '>
            <p className='text-[20px] font-[700] leading-[120%] text-gray-900'>{post.title}</p>
            <p className='text-gray-500 text-[12px]'>{new Date(post.date).toLocaleDateString('en-US',{dateStyle:'long'})} </p>
            <p className='text-gray-700 text-[14px] w-full overflow-hidden text-ellipsis line-clamp-2 '>{post.description} </p>
          </div>
          <div className='flex gap-[8px] item-center '>
            <div>
              <img src={post.authorimage} alt={post.authorname} className='w-[32px] h-[32px] rounded-full'></img>

            </div>
            <div className='flex flex-col '>
              <p className='text-[12px] '>{post.authorname}</p>
              <p className='text-[12px]'>{post.authorrole}</p>

            </div>

          </div>

        </div>

      </div>

          </Link>

  )
}
