import React, { useState } from 'react'

export function Gitprofile() {
  const [username, setUsername] =useState("");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleFetchProfile = () => {

    setLoading(true);
    setError(null);    


    fetch(`https://api.github.com/users/${username}`)
    .then((response) =>{
      if (!response.ok) {
        throw new Error("User not found or network error");
      }
      return response.json();
    })
    .then((data) =>{
      setProfile(data);
      setLoading(false);
      //  console.log(data);
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    });

    
  }

  const handelInputChange =(e) =>{
    setUsername(e.target.value);   
   

  };
  const handelSubmit =(e) =>{    
    e.preventDefault();   {/*page relode hudina*/}
    handleFetchProfile();  
    

  };


  return (
    <div className=' bg-white border mx-auto shadow-lg  p-4 max-w-sm mt-11 '>
        <p className='font-bold text-2xl mb-4 '>GitHub profile Lookup</p>

        <form className='flex mb-4 items-center' onSubmit={handelSubmit}>
        <input
            type="text"
            value={username}
            onChange={handelInputChange}
            placeholder="Enter your name"
            className='border-gray-400 border rounded-l px-3 py-2 w-full '
          />
          <button className='bg-blue-500 text-white px-3 py-2 rounded-r '>
            search
          </button>  
          </form> 

          {loading && <p className="text-blue-500">Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
     
              {profile&& !loading && !error &&(
                <div className='bg-gray-100 border mx-auto shadow-lg  p-8 max-w-sm mt-5 '>
                <div className='flex flex-col text-center'>
                  <img  src={profile.avatar_url} alt="{`${profile.login} avatar`}" className='rounded-full w-24 h-24 mx-auto mb-4 '/>
                  <h3 className='text-xl'>{profile.name}</h3>
                  <p className='text-gray-500'>{profile.bio}</p>
                </div>
                <div className='flex justify-between mb-4'>
                  <p>Followers: {profile.followers}</p>
                  <p>Following: {profile.following}</p>
                </div>
                <div className='text-center'>
                  <p> <strong>public Repos: </strong>{profile.public_repos} </p>
                </div>
                <div className='text-blue-400 text-center'>
            <a href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer">
              <button>View GitHub Profile</button>
            </a>
          </div>
        
              </div>

              ) }
      

    </div>

  )
}
