import React from "react";
import { Link, useParams } from "react-router-dom";
import "./post.css"; // Ensure to import the CSS file
import DeleteIcon from '@mui/icons-material/Delete';

function Post({ post }) {
    const { id } = useParams();
    const postItem = post.find((item) => item.id === parseInt(id));

    return (
        <div className="post-container">
            <img
                src="https://via.placeholder.com/150"
                alt="Post"
                className="post-image"
            />
            <div className="post-content">
                {postItem ? (
                    <>
                        <h2>{postItem.title}</h2>
                        <p>{postItem.date} at {postItem.time}</p>
                        <p>{postItem.body}</p>

                        <Link to={`/delete/${id}`}><DeleteIcon /></Link>
                    </>
                ) : (
                    <p>Post not found</p>
                )}


            </div>
        </div>
    );
}

export default Post;
