
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyForm from '../components/Form';

const PostDetail = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const postData = await response.json();
        setPost(postData);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, []);

  const updatePost = (newPostData) => {
    setPost((prevPost) => ({ ...prevPost, ...newPostData }));
  };

  return (
    <div >
      {post ? (
        <div className='innerPost'>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '30px' }}>Loading...</p>
      )}
      <Link
        style={{
          listStyle: 'none',
          color: 'black',
          marginLeft: '38rem',
          textDecoration: 'none',
          fontWeight: 'bold',
          color: 'green',
          border: '1px solid black'
        }}
        to={'/PostList'}
      >
        Back
      </Link>
      <MyForm onSubmit={updatePost} />
    </div>
  );
};

export default PostDetail;
