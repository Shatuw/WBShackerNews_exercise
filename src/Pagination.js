import React from 'react'

export default function Pagination({currentPage, getTheNews, totalPages}) {
   
  return (
    <div className='pagination'>
        <button onClick={() => getTheNews(currentPage-1)} disabled={currentPage <= 0}>&larr;</button>
        <span>{currentPage+1}/{totalPages}</span>
        <button onClick={() => getTheNews(currentPage+1)} disabled={currentPage >= totalPages-1}>&rarr;</button>
    </div>
  )
}
