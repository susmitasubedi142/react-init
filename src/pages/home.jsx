

import React from "react";
import { ProfileCard } from "../components";

export default function HomeNew() {
  const datas = [
    {
      name: "Ram Sharma",
      imageUrl: "/images/p1.jpeg",
      description: `Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et`,
    },
    {
      name: "Shyam Sharma",
      imageUrl: "/images/p11.jpeg",
      description: `Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et`,
    },
    {
      name: "Geeta Sharma",
      imageUrl: "/images/p111.jpeg",
      description: `Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et`,
    },
    {
      name: "Sita Sharma",
      imageUrl: "/images/p1111.jpeg",
      description: `Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et`,
    },
    {
      name: "Dinesh Sharma",
      imageUrl: "/images/p111.jpeg",
      description: `Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et`,
    },
  ];
  return (
    
    <div className="flex flex-col justify-center items-center gap-4 my-5">
      {datas.map((data, index) => {
        return (
          <ProfileCard
            key={index}
            name={data.name}
            imageUrl={data.imageUrl}
            description={data.description}
          />
        );
      })}
    </div>
  );
}