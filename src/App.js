import React, { useState } from 'react';
import "./App.css";
import News from "./News.js";
import Searchbar from './Searchbar.js';

function App() {
const [search, setSearch] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>HackerNews-Fetching-Site</h1>
        <Searchbar setSearch={setSearch}/>
        <News search={search} />
      </header>
    </div>
  );
}

export default App;
