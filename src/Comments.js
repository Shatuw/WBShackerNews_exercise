import React from 'react'

// const handleCommentClick = async () => {
//     const comments = await axios.get("http://hn.algolia.com/api/v1/items/:id")
//     return
// }


export default function Comments({num_comments, story_id}) {
  return (
    <>
    <a href={`https://news.ycombinator.com/item?id=${story_id}`} target='_blank'className='commentlink'>{num_comments} comments</a>
    
    {/* <div id="myModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <p>Some text in the Modal..</p>
        </div>
    </div> */}
</>
  )
}
