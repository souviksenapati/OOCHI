import React from 'react'
import Eyes from '../Eyes'
import Marque from '../FirstPage/Marque'

function Insights() {
  return (
    <div className="relative h-screen flex justify-center items-center">
    <div className='absolute bg-[#80CED7] w-full h-screen mt-[25vh]'>
    <Marque text="Insights"/>
      <Eyes/>
    </div>
    
    </div>
    
      );
}

export default Insights