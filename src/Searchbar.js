import React from 'react';

export default function Searchbar({setSearch}) {
    
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.firstChild.value);
    // e.target.firstChild.value = '';
}

  return (
  <div className='searchfield'>
  <label htmlFor='searchfield'>Search-topic: </label>
  <form onSubmit={handleSearch}>
    <input id="searchfield" name="searchfield" placeholder="vite.js"></input>
    <button type="submit">search</button>
  </form>
  </div>
  )
}
