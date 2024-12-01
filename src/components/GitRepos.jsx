import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { GitFork, Star } from 'lucide-react';

export function GitRepos() {
  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchProfile = () => {
    setLoading(true);
    setError(null);

    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('User not found or network error');
        }
        return response.json();
      })
      .then((data) => {
         // Sort repositories by creation date in descending order
          data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setRepos(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFetchProfile();
  };

  return (
    <div className="bg-white border mx-auto shadow-lg p-4 max-w-sm mt-11">
      <p className="font-bold text-center text-2xl">Repository</p>
      <form className="flex mb-4 items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
          className="border-gray-400 border rounded-l px-3 py-2 w-full"
        />
        <button className="bg-blue-500 text-white px-3 py-2 rounded-r">
          Search
        </button>
      </form>

      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {repos.length > 0 && !loading && !error && (
        <div className="border border-gray-300 rounded-lg p-4 mt-4 bg-gray-50 gap-4 flex flex-col">
          {repos.map((repo) => (
            <div key={repo.id} className="border px-5 py-3 rounded shadow">  


              <div className='flex gap-3 items-center mb-3'>              
             <a href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer">
              <button className='font-semibold text-blue-500 hover:underline '>{repo.name}</button>
            </a>
                
                <p className='text-gray-500 border border-gray-400 rounded-3xl text-xs px-[4px] py-[4px] w-11 text-center'>
                  {repo.private ? 'Private' : 'Public'}
                </p>
              </div>
              <p className="text-gray-700 mb-3">{repo.description || 'No description available'}</p>
              <div className='flex text-gray-500 text-sm gap-4 mb-3'> 
              <p>{repo.language|| 'N/A'}</p>
              <div className='flex '>
              <Star />
              <p>{repo.stargazers_count}</p>
              </div>
              <div className='flex'>
              <GitFork />
              <p>{repo.forks_count}</p>
              </div>
             
              <p >
                Updated {formatDistanceToNow(new Date(repo.pushed_at), { addSuffix: true })}
              </p>
             
              </div>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
