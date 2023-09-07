import React from 'react';
import './FooterStyles.css'
import {FaFacebook , FaLinkedin , FaMailBulk , FaPhone , FaSearchLocation , FaTwitter} from 'react-icons/fa' 

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                 <div className='left'>
                      <div className='location'>
                          <FaSearchLocation size={20} style={{color: '#ffffff' , marginRight: '2rem'}}></FaSearchLocation>
                           <div>
                           <p>123 Acme St.</p>
                           <h4>Houston , Tx</h4>
                          </div>
                      </div>
                          <div className='phone'>
                            <h4> <FaPhone size={20} style={{color: '#ffffff' , marginRight: '2rem'}} ></FaPhone> 1-800-123-1238</h4>
                          </div>
                             <div className='email'>
                               <h4> <FaMailBulk size={20} style={{color: '#ffffff' , marginRight: '2rem'}}></FaMailBulk> Trips@galaxy.com</h4>
                             </div>
                 </div>
                  
             <div className='right'>
                 <h4>About the company</h4>
                 <p>Lorem ipsum dolor sit amet,
                     consectetur adipiscing elit.
                      Duis ac euismod nulla, vitae
                       viverra mauris. Nullam euismod 
                        dui sit amet tempus pellentesque.
                </p>
                 <div className='social'>
                    <FaFacebook size={30} style={{color: '#ffffff' , marginRight: '1rem'}} ></FaFacebook>
                    <FaLinkedin size={30} style={{color: '#ffffff' , marginRight: '1rem'}} ></FaLinkedin>
                    <FaTwitter size={30} style={{color: '#ffffff' , marginRight: '1rem'}}></FaTwitter>
                 </div>
             </div>
            </div>
            
        </div>
    );
};

export default Footer;