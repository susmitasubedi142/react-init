import React from 'react'

export  function Searchbar({ searchTerm, setSearchTerm }) {
  return (
    <input 
    type ="text"
    placeholder='search ...'
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full md:w-1/3 px-4 py-2 mb-4 md:mb-0 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

    
    
  )
}
