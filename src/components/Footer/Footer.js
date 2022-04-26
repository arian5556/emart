import React from 'react';
import { TextField } from '@mui/material';
const Footer = () => {
   
    return (
        <div style={{backgroundColor:"#949886" ,color:'white'}}>
            <div className="container-fluid px-5">
        <div  className="row py-5">
           <div className="col-sm-12 col-md-6 col-lg-3  text-center text-lg-start">
               <h2 className="fw-bold text-warning">E mart</h2>
               <p className="lh-lg fw-light">We make yourself infused with the spirit of contemporary design and minimalist philosophies.</p>
            </div> 
             
            
           <div className="col-sm-12 col-md-6 col-lg-3">
           <h4>CONTACT US</h4>
            <p className="lh-lg fw-light">No: 58 A, East Mirpur Street,<br/>Alaska, MD,<br/>USA 4508.<br/><i className="fas fa-phone-alt"></i> +880-1234567891 <br /> <i className="far fa-envelope"></i>  support@somemail.com</p>
            </div> 
           
            <div className="col-sm-12 col-md-6 col-lg-3 ">
                <h4>Social</h4>
                    <p className="fw-light"><i className="fab fa-instagram me-3"></i>INSTAGRAM</p>
                    <p className="fw-light"><i className="fab fa-twitter me-3"></i>TWITTER</p>
                    <p className="fw-light"><i className="fab fa-youtube me-3"></i>YOUTUBE</p>
                    <p className="fw-light"><i className="fab fa-facebook me-3"></i> FACEBOOK</p>
                   
            </div>

            <div className="col-sm-12 col-md-6 col-lg-2 ">
            <h1 className='mb-2'>Newsletter</h1>
        <p className='mb-3'>Subscribe for latest news.</p>
        <TextField 
         
         id="standard-basic"
          label="Email" 
          name='email'
          type='email'
          variant="standard" /> 
       
            </div>
            
        </div>
        </div>
        <div  className=" container border-top text-center p-3">
        © 2022 by Us, All Rights Reserved
        </div>
       
        </div>
    );
};

export default Footer;