import React, { useEffect, useState } from 'react';
import "./App.css";
import News from "./News.js";
import Searchbar from './Searchbar.js';

function App() {
const [search, setSearch] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <div>HackerNews-Fetching-Site</div>
        <Searchbar setSearch={setSearch}/>
        <News search={search} />
      </header>
    </div>
  );
}

export default App;
