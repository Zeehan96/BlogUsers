
import React, { useState } from 'react';
import Footer from '../components/Footer';
import editimage from '../assets/edit.png';

const MyForm = ({ onSubmit }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // ...

    onSubmit({ title: newTitle, body: newBody });
  };

  return (
    <div>
<form onSubmit={handleSubmit} style={{margin:'0 25rem',marginTop:'5rem'}}>
  <h3 style={{textAlign:'center'}}>Form For Edit&Update Post</h3>
      <label>
        New Title:
        <input style={{width:'25.5rem',height:'2.5rem',borderRadius:'20px',marginTop:'3rem'}} type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      </label>
      <label style={{}}>
        New Body:
        <textarea style={{margin:'2rem 0',width:'25rem',height:'10rem',borderRadius:'20px'}} value={newBody} onChange={(e) => setNewBody(e.target.value)} />
      </label>
      <br />
      <button style={{backgroundColor:'#47D466',width:'25rem',height:'2.5rem',marginTop:'2rem',border:'none',border:'0.5px solid black',borderRadius:'20px',marginLeft:'5rem',marginBottom:'2rem',fontWeight:'bold'}} type="submit"> <img src={editimage} alt="" /> Update Post</button>
    </form>
    <Footer/>
    </div> 
  );
};

export default MyForm;
