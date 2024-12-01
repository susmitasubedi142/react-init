import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { ArrowDown } from 'lucide-react';

export function MoviesList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc'); // New state for sorting

  const fetchMovies = () => {
    setLoading(true);
    setError(null);
    fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=8f67a2be`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data.Response === 'False') {
          throw new Error(data.Error);
        }
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };
  
  const fetchMovieDetails = (imdbID) => {
    setLoading(true);
    setError(null);
    fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=8f67a2be`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === 'False') throw new Error(data.Error);
        setSelectedMovie(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedMovie(null); // Clear selected movie when searching for new movies
    fetchMovies();
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Sort movies based on the selected order
  const sortedMovies = [...movies].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.Title.localeCompare(b.Title);
    }
    return b.Title.localeCompare(a.Title);
  });

  return (
    <div className="bg-white  border px-8 py-6 mx-auto shadow-lg p-4 mt-6">
      <p className="font-bold text-center text-2xl mb-4">Movies List</p>
      <form className="flex mb-4 items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for movies"
          className="border-gray-400 border rounded-l px-3 py-2 w-full"
        />
      </form>
      

      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {selectedMovie ? (
        <div className="border p-7 mt-5">
          <p className="font-semibold border-l-8 border-yellow-500 px-5 text-3xl mb-5 pb-5">Movie Details</p>
          <button onClick={() => setSelectedMovie(null)} className="text-blue-500 mb-4">Back to list</button>
          <h2 className="text-2xl font-bold">{selectedMovie.Title} ({selectedMovie.Year})</h2>
          <p><strong>Genre:</strong> {selectedMovie.Genre}</p>
          <p><strong>Director:</strong> {selectedMovie.Director}</p>
          <p><strong>Actors:</strong> {selectedMovie.Actors}</p>
          <p><strong>Plot:</strong> {selectedMovie.Plot}</p>
          <img src={selectedMovie.Poster} alt={`${selectedMovie.Title} poster`} className="w-48 mt-4" />
        </div>
      ) : (
        movies.length > 0 && (
          <div className="border p-7">
            <div className='flex justify-between'>
            <p className="font-semibold border-l-8 border-yellow-500 px-5 text-3xl mb-5 pb-5">Movies</p>
            <button onClick={toggleSortOrder} className="bg-blue-600 text-white px-4 py-1 mb-4 flex items-center ">
               {sortOrder === 'asc' ? <ArrowUp /> : <ArrowDown />}
               <span className="ml-1">Sort by Title</span>
            </button>
              </div>
            <div className="border-t-2">
              {sortedMovies.map((movie, index) => (
                <div key={movie.imdbID} className="border-t-2 mb-4 cursor-pointer" onClick={() => fetchMovieDetails(movie.imdbID)}>
                  <div className="flex">
                    <img 
                      src={movie.Poster } 
                      alt={`${movie.Title} poster`} 
                      className="w-20 h-24 mr-4"
                    />
                    <div className="flex flex-col">
                      <p className="font-bold">{index + 1}. {movie.Title}</p>
                      <p className="text-gray-500">{movie.Year}</p>
                      <p className="text-gray-500">{movie.Type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}
