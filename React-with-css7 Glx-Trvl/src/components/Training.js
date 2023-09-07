import React from 'react';
import './TrainingStyles.css'

import Pod from '../asasse/pod.jpg';
import Moon from '../asasse/moon.jpg'
import { Link } from 'react-router-dom';

const Training = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Training</h1>
                <p> dolor sit amet, consectetur adipiscing elit.
                     Duis ac euismod nulla, vitae viverra mauris.
                     Nullam euismod dui sit amet tempus pellentesque.</p>

                     <Link to="/contact"><button className='btn'>Contact</button></Link>
            </div>

            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img className='img' src={Moon} alt='img'></img>
                    </div>
                    <div className='image-stack bottom'>
                        <img className='img' src={Pod} alt='img'></img>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Training;