import React from 'react';
import img from '../assets/NavLogoo.PNG';
import WorkImg from '../assets/w2.PNG';
import cupimg from '../assets/cup.png';
import heart from '../assets/heart.png';
import msgs from '../assets/msgs.png';
import { Link,NavLink,useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <nav className="navbar">
      {/* Left side of the Navbar */}
      <div className="left-section">
        <button onClick={()=>navigate('/postdetail')}>go to post detail</button>
        <button>go to postListing</button><br />
      <img className='navlogo' src={img} alt="Description of the image" />
        <div className="tags">
          <div className="tag">
           <NavLink style={({isActive})=>{return{color:isActive? 'red':'black'}}} to={'/'}>Home</NavLink> 
          <img src={WorkImg} alt="Description of the image" />
         </div>
           <div className="tag">
           <NavLink  style={({isActive})=>{return{color:isActive? 'red':'black' }}} to={'/About'}>About</NavLink> 
            <img src={cupimg} alt='im'/></div>
           <div className="tag">Services<img src={heart} alt='im'/>  </div> 
        </div>
      </div>

      {/* Right side of the Navbar */}
      <div className="right-section">
        <button className="navbar-button1">blog<img src={msgs} alt='im'/></button>
        <button className="navbar-button">Planner</button>
      </div>
    </nav>


   
  );
};

export default Navbar;
