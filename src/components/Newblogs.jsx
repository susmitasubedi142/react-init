import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export  function Newblogs() {
    const [NewblogsData, setNewblogsData] = useState([]); // State to store quiz data
    const [error, setError] = useState(null);


    useEffect(() => {
      async function fetchBlogs() {
        try {
          const response = await fetch(
            "https://fosslovers.com/wp-json/wp/v2/posts"
          );
          if (response.ok === false) {
            throw new Error("Failed to fetch blogs");
          }
          const data = await response.json();
          setNewblogsData(data); // Store the blog data in state
        } catch (err) {
          setError(err.code); // Catch and set any error
        }
      }
  
      fetchBlogs();
    }, []);
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
  return (
    <div className='flex w-full justify-center p-10'>
      <div className=' grid grid-cols-2 container gap-5'>
      {NewblogsData.map((blogsDate)=> (
        <BlogCard
        key ={blogsDate.id}
        title= {blogsDate.title.rendered}
        excerpt= {blogsDate.excerpt.rendered}
        imgUrl= {blogsDate.jetpack_featured_media_url}
        postedDate= {new Date(blogsDate.date).toLocaleDateString('en-US',{dateStyle:'long'})}  
        slug={blogsDate.slug}      
        />
      )
    )}
    </div>

    </div>
    
  )
}

export  function BlogCard({title, excerpt, imgUrl, postedDate, slug, id}) {
    return(
      
      <Link to={`/Newblogs/${slug}`} >
        <div className='flex flex-col items-start border p-5 rounded-lg gap-4 shadow-lg  '>
      
      <h1 className='text-2xl font-bold' >{title}</h1>
      <img src= {imgUrl} alt= {title} className='w-full h-96 overflow-hidden'></img>
      

      <p dangerouslySetInnerHTML={{ __html: excerpt }}/>
      <p className='text-gray-500'>Published Date:{postedDate}</p>


      

      
  </div>
      </Link>

        
    



    )
}

