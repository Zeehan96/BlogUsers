import React from "react";
import twitter from '../assets/twitter.png';
import aoole from '../assets/apple.png';
import instgram from '../assets/instagram.png';
const Footer=()=>{

    return(
   <div className="Footer sticky-bottom " style={{backgroundColor:'white'}}>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <h1>Looking for <span style={{color:'green'}}>more</span>?</h1>
        <button style={{backgroundColor:'white',border:'1px solid green',color:'green',marginLeft:'10px',width:'120px',padding:'10px',borderRadius:'25px'}}>archieve </button>
    </div>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',padding:'10px'}}>
    <img style={{width:'30px',height:'30px'}} src={twitter} alt="" />
     <img style={{width:'30px',height:'30px'}} src={aoole} alt="" />
   <img style={{width:'30px',height:'30px'}} src={instgram} alt=""/>

    </div >
    


       </div>

    );
}
export default Footer;