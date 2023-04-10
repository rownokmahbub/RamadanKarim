
import React from 'react'

const Gallery = () => {
  return (
    <div className=' py-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 '>
        <div className="container mx-auto">
        <p className='text-2xl md:text-4xl font-semibold flex justify-center text-center my-20'>Lets make these people happy <br /> with food in ramadan</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center">
            <img className='rounded-2xl dark:hue-rotate-180' src="/assets/g1.jpg" alt="g1" />
            <img className='rounded-2xl dark:hue-rotate-180' src="/assets/g2.jpg" alt="g1" />
            <img className='rounded-2xl dark:hue-rotate-180' src="/assets/g3.jpg" alt="g1" />
            <img className='rounded-2xl dark:hue-rotate-180' src="/assets/g4.jpg" alt="g1" />
            <img className='rounded-2xl dark:hue-rotate-180' src="/assets/g5.jpg" alt="g1" />
            <img className='rounded-2xl dark:hue-rotate-180' src="/assets/g6.jpg" alt="g1" />
            <img className='rounded-2xl dark:hue-rotate-180' src="/assets/g7.jpg" alt="g1" />
            <img className='rounded-2xl dark:hue-rotate-180' src="/assets/g1.jpg" alt="g1" />
            <img className='rounded-2xl dark:hue-rotate-180' src="/assets/g7.jpg" alt="g1" />
            <img className='rounded-2xl dark:hue-rotate-180' src="/assets/g2.jpg" alt="g1" />
            <img className='rounded-2xl dark:hue-rotate-180' src="/assets/g5.jpg" alt="g1" />
            <img className='rounded-2xl dark:hue-rotate-180' src="/assets/g6.jpg" alt="g1" />
        </div>
        </div>
      
    </div>
  )
}

export default Gallery