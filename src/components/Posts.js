import React from 'react'

function Posts() {
  return (
    <div>
        <div className='form'>
            <input type="text" placeholder="Enter a Text A" />
            <input type="text" placeholder="Enter a Text B" />
            <button>Add Post</button>
        </div>

        <div className='posts'>
            <div className='post'>
                <h2>Post Title</h2>
                <p>Description</p>
                <button>Edit</button>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Posts
