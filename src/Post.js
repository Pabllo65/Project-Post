import React from 'react';
import './App.css';

const Post = ({ post, onDelete }) => {
  return (
    <div className="post">
      <h2>{post.name}</h2>
      <p>{post.message}</p>
      {post.photo && <img src={post.photo} alt="Post" />}
      <button onClick={() => onDelete(post.id)}>Remover</button>
    </div>
  );
};

export default Post;
