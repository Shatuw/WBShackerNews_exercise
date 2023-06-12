import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination.js';

export default function News({search}) {
const [news, setNews] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [currentPage, setCurrentPage] = useState(0);
const [totalPages, setTotalPages] = useState(0);

const getTheNews  = async (page) => {
  
  const hackerNewsApi=`http://hn.algolia.com/api/v1/search?query=${search}&page=${page}&tags=story`;
    try{
        setIsLoading(true);
        const {data} = await axios.get(hackerNewsApi);
        setIsLoading(false);
        setNews(data.hits);
        setCurrentPage(data.page);
        
        setTotalPages(data.nbPages);
    }
    catch(err){
        alert(err.message);
    }

};// end of func: "getTheNews"

useEffect(() => {
    if (search){
    getTheNews(0);
    }
},[search]);

if (!search){
    return null;
}

if (isLoading) {
    return <h2>Loading...</h2>
}

return (
    news.length > 0 ?
    <>
        <Pagination currentPage={currentPage} totalPages={totalPages}  getTheNews={getTheNews}/>
        <ul>
            {
                news.map((item) => {
                    
                    return(
                    <li key={item.objectID}>
                        <a href={item.url}>{item.title}</a>
                        <p>author: {item.author}</p>
                    </li>
                    )
                })
            }
        </ul>
    </>
    :
        <h1>There are no news for: "{search}"</h1>
    )
}
