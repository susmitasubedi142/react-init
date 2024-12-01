import React from 'react';

import { Blog } from './Blog';
import { Searchbar } from './Searchbar';
import { blogs } from '../Data';


export function NewsPortal() {
  // const data = [
  //   {
  //     title: "React",
  //     
  //     date: "2/11/2023",
  //   },
  //   {
  //     title: "React Advanced",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo earum eveniet similique itaque excepturi voluptates inventore molestias! Dolorem, quod harum, similique quia exercitationem eum tempore dolores fugit quo ipsum unde.",
  //     date: "3/11/2023",
  //   }
  // ];
  

  return (
    <>
      <Searchbar />

      <div className="grid grid-col-1 w-full justify-center items-center gap-4 my-5">
        {blogs.map((post) => (
          <Blog
            key={post.id}
            post= {post}
            
          />
        ))}
      </div>
    </>
  );
}
