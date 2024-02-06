// MyForm.js
import React, { useState } from 'react';
import refresh from '../assets/refresh.png';

const MyForm = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{margin:'0 29rem',borderRadius:'20px',border:'0.5px solid green',marginTop:'25px',boxShadow:'5px 5px 5px gray',marginBottom:'35px'}}>
      <label>
        Title:
        <input style={{width:'22rem',marginTop:'10px',height:'3rem',borderRadius:'20px'}} type="text" name="title" value={formData.title} onChange={handleChange} />
      </label><br />
      <label>
        Body:
        <textarea style={{width:'22rem',height:'15rem',marginTop:'30px'}} name="body" value={formData.body} onChange={handleChange} />
      </label><br />
      <button style={{marginTop:'10px',width:'20rem',marginLeft:'60px',borderRadius:'20px',height:'2rem',marginBottom:'20px',backgroundColor:'#47D466',fontWeight:'bold'}} type="submit">Update-Detail <img src={refresh} alt="" /></button>
    </form>
  );
};

export default MyForm;
