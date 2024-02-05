import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostDetail from './PostDetail';
import {useNavigate, Link} from 'react-router-dom';
import Footer from './Footer';
import Banner from './Banner';


const PostList = () => {


  const navigate = useNavigate()
  const [posts, setPosts] = useState([]);


  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchData();
  }, []);


  const postDetail=(post)=>{
    navigate('./PostDetail')
  }


  return (
      <div>
        <Banner/>
    <div className='PostListDiv'>

      <h1>Post Listing</h1>
      <ul className='PostList marginTop'>
        {posts.map(post => (
          <li className='marginTop' key={post.id}>
            <strong >{post.title}</strong>
            <p >{post.body}</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
               <Link style={{textDecoration:'none',color:'black',fontWeight:'bold'}} to={'/postdetail'} >View detail</Link> 
            </div>
          </li>
        ))}
      </ul>
      <Footer/>
    </div>
    </div>
  );
};

export default PostList;
