import React from 'react'
import Marque from '../FirstPage/Marque';
import Eyes from '../Eyes';

function Contact() {
    return (
        <div className="relative h-screen flex justify-center items-center">
        <div className='absolute bg-[#80CED7] w-full  h-screen mt-[25vh]'>
        <Marque text="Contact"/>
        <Eyes/>
        </div>   
        </div>
          );
}

export default Contact