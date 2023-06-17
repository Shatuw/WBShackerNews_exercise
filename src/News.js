import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination.js';
import Comments from './Comments.js';

export default function News({search}) {
const [news, setNews] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [currentPage, setCurrentPage] = useState(0);
const [totalPages, setTotalPages] = useState(0);

const getTheNews  = async (page) => {
  
  const hackerNewsApi=`http://hn.algolia.com/api/v1/search_by_date?query=${search}&page=${page}&tags=story`;
    try{
        setIsLoading(true);
        const {data} = await axios.get(hackerNewsApi);
        setIsLoading(false);
        setNews(data.hits);
        setCurrentPage(data.page);
        console.log(data.hits);
        
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
        <ul className='newsSection'>
            {
                news.map((item,index) => {
                    
                    return(
                    <a href={item.url} target="_blank" key={item.objectID}>
                        <li >
                            <div>{index+1}. {item.title}<br/>
                            Author: <b>{item.author}</b> written on the {item.created_at.substr(0,10)}</div>
                            <Comments num_comments={item.num_comments} story_id={item.objectID}/>
                        </li>
                    </a>
                    )
                })
            }
        </ul>
    </>
    :
        <h1>There are no news for: "{search}"</h1>
    )
}
