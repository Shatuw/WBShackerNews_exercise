import React from 'react';

export default function Searchbar({setSearch}) {
    
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.firstChild.value);
    e.target.firstChild.value = '';
}

  return (
  <form onSubmit={handleSearch}>
    <input name="searchfield" placeholder="search topic"></input>
    <button type="submit">search</button>
  </form>
  )
}
