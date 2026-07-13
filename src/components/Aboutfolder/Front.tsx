import React from 'react'
import { LuSparkles } from 'react-icons/lu'

const Front = () => {
  return (
    <div className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      <div className='absolute inset-0  top-pink-900 dark:from-gray-950  dark:to-gray-900' />
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        {/* top section */}
        <div>
          <div className='inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8' data-aos="fade-down" data-aos-delay="200">
          <LuSparkles className='h-5 w-5 '/>
          <span className='text-white font-medium' >Welcome to Taskzen management system</span>
          </div>
        </div>
        {/* typewrite text */}
        <h1 className='text-4xl sm:text-6xl md:text-4xl lg:text-6xl font-bold text-white mb-6' data-aos="fade-down" data-aos-delay="200">
             Building a task with taskZen {" "}
           <span className="text-primary/70">
              Be smartly             </span>   
        </h1>
        {/* description */}
        <p className=' flex items-center text-base sm:text-xl text-gray-200 mb-12 mx-w-3xl mx-auto leading-relaxed'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda enim sunt, rerum veritatis excepturi fugit, ducimus voluptatibus eligendi reiciendis expedita maiores repellat, porro voluptas culpa amet? Libero sit unde magni!</p>
       
      </div>

      
    </div>
  )
}

export default Front
