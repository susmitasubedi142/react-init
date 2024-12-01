import React from 'react'

const Abc = () => {
  const peoples = [
    {name: "Susmita", image: "p1.jpeg"},
    {name: "Ichha", image: "p11.jpeg"},
    {name: "Bidi", image: "p111.jpeg"},
    {name: "Pranil", image: "p1111.jpeg"},

  ];
  const list = peoples.map((people) => (
    <li key={people.name} className="flex flex-col item-center ">
      {people.img && (
        <img src={people.image} alt={people.name} className="w-30 h=30 rounded-full" />
      )}
      <p>{people.name}</p>
    </li>
  ));

  return (
    <div>
      <div className='container mx-auto p-4 bg-red-300'>
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default Abc;