import React, { useState } from 'react';
import Post from './Post';
import './App.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [photo, setPhoto] = useState('');

  const addPost = () => {
    if (name && message) {
      const newPost = {
        id: Date.now(),
        name,
        message,
        photo,
      };
      setPosts([newPost, ...posts]);
      setName('');
      setMessage('');
      setPhoto('');
    }
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="App">
      <h1>Lista de Posts</h1>
      <div className="post-form">
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL da Foto"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <button onClick={addPost}>Adicionar Post</button>
      </div>
      <div className="post-list">
        {posts.map((post) => (
          <Post key={post.id} post={post} onDelete={deletePost} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
