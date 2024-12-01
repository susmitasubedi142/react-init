import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export  function BlogDetail() {
    const[BlogDetail, setBlogDetail] = useState([]);
    const[NewblogData, setBlogData] = useState([]);
    const [error, setError] = useState();
    const [loading, setloading]= useState(true);

    const{slug}= useParams();
    console.log(slug)
    const blogData = NewblogData.find((blogData)=>blogData.slug ===slug);

    
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
            setBlogData(data); // Store the blog data in state
          } catch (err) {
            setError(err.code); // Catch and set any error
          } finally{
            setloading(false);
          }
        
        }
    
        fetchBlogs();
      }, []);
      if (loading){
        return <div>
            loading....
        </div>
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }


  return (
    // <div className=''> {blogData.title.rendered}
    <div className='flex flex-col py-[32px] justify-center items-center'>
       <div className='flex flex-col w-[680px] gap-[32px]'>
     <div className='gap-4'>
        <p className='text-text-primary text-[48px] font-[700] leading-[100%]'>{blogData.title.rendered}</p>
        <p className='text-[16px] text-[#595959]'>Published on: {new Date(blogData.date).toLocaleDateString('en-US', {dateStyle: 'long'})}</p>

    </div>
    <div className="w-[680px]  flex-shrink-0">
          <img src= {blogData.jetpack_featured_media_url} alt= {blogData.title.rendered} className='w-full h-full object-cover'/>
        </div>

        <p className='text-text-secondary text-[20px] leading-[32px]'>
          
          <div dangerouslySetInnerHTML={{__html: blogData.content.rendered}}/>
        

        {/* {blogData.content.rendered} */}

        </p>

   </div>  

    </div>
     
 
  )
}
