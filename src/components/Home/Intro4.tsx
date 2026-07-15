import React from 'react'
import { BiCheck } from 'react-icons/bi'

const Intro4 = () => {
  return (
    <div className='pt-16 pb-16 px-10 py-12'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                {/* image content */}
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHKCG1JsunFmEMoRz55gPw7cXwSXFEgUV79vVXNeyMx93IuOjhz-NNcns&s=10" alt="img" className=''  data-aos="fade-left"
      data-aos-delay="100"
      data-aos-anchor-placement="top-center" />
                </div>
                {/* text content */}
                <div  data-aos="fade-right"
      data-aos-delay="200"
      data-aos-anchor-placement="top-center">
                    <h1 className='text-2xl md:text-2xl lg:text-5xl font-bold leading-8 lg:leading-10'>Get applications:</h1>
                    <p className='mt-6 text-gray-700 dark:text-gray-300'>Join Genzzi's remote-first team. We orchestrate digital tools that feel like liquid glass—highly refined, tactile, and responsive. Drop your heavy tools; let's build the future of software craft.</p>
                    <div className='mt-8'>
                        <div className='flex items-center space-x-2 mb-4'>
                            <BiCheck className='w-7 h-7 text-gray-300'/>
                            <span className='text-gray-700 dark:text-gray-300 font-medium'>Bring to the table win-win surive</span>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='flex items-center space-x-2 mb-4'>
                            <BiCheck className='w-7 h-7 text-gray-300'/>
                            <span className='text-gray-700 dark:text-gray-300 font-medium'>Bring to the table win-win surive</span>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='flex items-center space-x-2 mb-4'>
                            <BiCheck className='w-7 h-7 text-gray-300'/>
                            <span className='text-gray-700 dark:text-gray-300 font-medium'>Bring to the table win-win surive</span>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button className='px-10 py-3 bg-primary rounded-lg text-white text-center cursor-pointer hover:bg-gray-800 transition-all duration'>Post a Job</button>
                    </div>
                </div>
                
            </div>
        </div>
  )
}

export default Intro4
