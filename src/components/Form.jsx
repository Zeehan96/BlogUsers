import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    userId: '',
  });

  const [formErrors, setFormErrors] = useState({
    title: '',
    body: '',
    userId: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    if (formData.title.trim().length < 5) {
      newErrors.title = 'Title must be at least 5 characters';
      isValid = false;
    } else {
      newErrors.title = '';
    }

    if (formData.body.trim().length < 10) {
      newErrors.body = 'Body must be at least 10 characters';
      isValid = false;
    } else {
      newErrors.body = '';
    }

    const userIdInt = parseInt(formData.userId, 10);
    if (isNaN(userIdInt) || userIdInt <= 0) {
      newErrors.userId = 'User ID must be a positive number';
      isValid = false;
    } else {
      newErrors.userId = '';
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormData({
        title: '',
        body: '',
        userId: '',
      });
      setFormErrors({
        title: '',
        body: '',
        userId: '',
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{margin:'0 35rem',marginTop:'50px'}}>
      <h1>My Form</h1>

        <label style={{}}>
          Title:
          <input style={{width:'300px'}}
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <p style={{ color: 'red' }}>{formErrors.title}</p>
        </label>
        <br />

        <label>
          Body:
          <textarea style={{width:'300px'}}
            name="body"
            value={formData.body}
            onChange={handleChange}
          />
          <p style={{ color: 'red' }}>{formErrors.body}</p>
        </label>

<br />
        <button style={{width:'300px'}} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;
