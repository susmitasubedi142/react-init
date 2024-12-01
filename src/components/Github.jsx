import React from 'react';        { /*gitprofile wala ma complete xa yo practice matra ho*/}

export function Github() {
  return (
      <div className="context bg-white p-4 rounded shadow-lg  mx-auto max-w-sm ">
        <h1 className="text-xl font-semibold mb-2">Heading</h1>
        <div className="search flex mb-4">
          <input type="text" className="border rounded-l px-3 py-2 w-full" placeholder="Search..." />
          <button className="bg-blue-500 text-white px-3 py-2 rounded-r">Search</button>
        </div>
        <div className="main text-center">
          <img src="https://www.bing.com/th?id=OIP.UVwOYZgB82XxFtM52g9uSAHaFj&w=125&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h1 className="text-xl font-bold">Name</h1>
          <p className="text-gray-600 mb-4">Bio</p>
          <div className="first-row flex justify-between mb-4">
            <h3 className="text-lg font-semibold">Followers: </h3>
            <h3 className="text-lg font-semibold">Following: </h3>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Repos: </h3>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">View Profile</button>
        </div>
      </div>
  );
}
