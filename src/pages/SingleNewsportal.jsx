import React from 'react'
import { useParams } from 'react-router-dom'
import { blogs } from '../Data';

export  function SingleNewsportal() {
    const { id } =useParams();
    const post= blogs.find((post)=> post.id=== parseInt(id));

    if (!post) {
      return <div>Post not found</div>;
    }


  return (
    <>
     {/* <div>
        <p>Title: {post.title}</p>
        <p>Description: {post.description}</p>
        <p>Authorname: {post.authorname}</p>       
     </div> */}

     <div className='flex flex-col py-[32px] justify-center items-center '>

        <div className='flex flex-col w-[680px] gap-[32px]'>

        {/* //topdiv */}
          <div className='flex flex-col gap-[24px]'>

            <div className='flex flex-col gap-[16px]'>
               <p className='text-text-primary text-[48px] font-[700] leading-[100%]'>{post.title}</p>
               <p className='text-[#696969] text-[14px] '>{new Date(post.date).toLocaleDateString('en-US', {dateStyle: 'long'})}</p>
            </div>

            <div className='flex gap-[12px] items-center'>

            <div>

              <img src= {post.authorimage} alt= {post.authorname} className='w-[40px] h-[40px] rounded-[360px]'/>

            </div>

            <div className='flex flex-col gap-[2px] '>
              <p className='text-[#262626] text-[14px]'>{post.authorname}</p>
              <p className='text-[#5D5D5D] text-[14px]'>{post.authorrole}</p>
            </div>

          </div>

          </div>

        {/* //featured image */}
        <div className="w-[680px]  flex-shrink-0">
          <img src= {post.image} alt= {post.title} className='w-full h-full object-cover'/>
        </div>

        {/* //contents-lastdiv */}
        <p className='text-text-secondary text-[20px] leading-[32px]'>
          {post.description.split('/n').map((line, index)=>(
            <div key= {index}>
                {line}
                <br/>
                <br/>
            </div>
          ))}
        </p>

        </div>

     </div>
    </>
  )
}
