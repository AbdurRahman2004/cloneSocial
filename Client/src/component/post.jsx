import React, { useEffect, useState } from "react";
import "./Style.css";

function Post(){
    const [posts,setPost] = useState([]);
    const [error,setError] = useState(null);

    useEffect(()=>{
        async function fetchPost(){
            try{
                const response = await fetch('http://localhost:3001/posts');
                if(!response) throw Error('Please reload the website!')
                const res = await response.json();
                console.log(res);
                setPost(res)
            }
            catch(e){
             const err = e.message;
             setError(err);
            }
        }

         fetchPost()
    },[]);

    
    return (
        <>
        { !error  && error}
        {posts.length > 0 &&
         <div className="post-grid">
      {posts.map(post => (
        <div key={post.id} className="post-thumbnail-container">
          <img 
            src="https://via.placeholder.com/480x270" 
            alt="Thumbnail" 
            className="post-thumbnail" 
          />
          <div className="post-info">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-date">{post.date} at {post.time}</p>
            <p className="post-body">{post.body}</p>
          </div>
        </div>
      ))}
    </div>}

       
        </>
    )
}

export default Post;