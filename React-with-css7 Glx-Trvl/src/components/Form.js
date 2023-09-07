import React from 'react';
import './FormStyles.css'

const Form = () => {
    return (
        <div className='form'>
             <form>
                <label>Your Name</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='email'></input>
                <label>Submit</label>
                <input type='text'></input>
                <label>Your Name</label>
               <textarea rows='6' placeholder="Type a short message hero"></textarea>
               <button className='btn'>Submit</button>
             </form>
        </div>
    );
};

export default Form;