import React from 'react'

function Footer() {
  return (
    <div className='flex gap-5 w-full h-screen  p-20'>
        <div className='w-1/2  h-full justify-between flex flex-col'>
            <div>
            <h1 className='text-[9vw] font-semibold uppercase leading-none '>Eye-</h1>
            <h1 className='text-[9vw] font-semibold uppercase leading-none '>Opening</h1>
            </div>
        </div>
        <div className='w-1/2'>
        <h1 className='text-[6vw] font-semibold uppercase leading-none'>Presentations</h1>
        <h1 className='text-[6vw] font-semibold uppercase leading-none'>For</h1>
        <h1 className='text-[6vw] font-semibold uppercase leading-none'>Public</h1>
        <h1 className='text-[6vw] font-semibold uppercase leading-none'>And</h1>
        <h1 className='text-[6vw] font-semibold uppercase leading-none'>Private</h1>
        </div>
    </div>
  )
}

export default Footer