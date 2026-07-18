import React from 'react'
import JobSearchBar from '../Heror/JobSearchBar'

const Intro = () => {
  return (
    <div className="relative py-16 px-8 w-full h-screen flex justify-center flex-col ">
        <div className="max-w-7xl md:max-w-6xl m-4 mx-auto  md:flex flex-col  items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
           
            {/* image  content */}
            {/* <div   data-aos="fade-right"
  data-aos-delay="200"
  data-aos-anchor-placement="top-center" className="mx-auto  xl:block">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX79ZgGDMu8kagVels4BMf7K5GvucgNnWMfWzcYbPNsfabYS37i0h2jZ0&s=10" alt="hero" className="border-none outline-none" />
            </div> */}
             {/* text content */}
            <div  data-aos="fade-left"
  data-aos-delay="200"
  data-aos-anchor-placement="top-center">
                {/* heading */}
                <h1 className="text-3xl sm:text-6xl font-bold">A smart platform to organize projects, manage tasks, and boost team productivity.</h1>
                {/* subheading */}
                <p className="mt-4 text-sm sm:text-lg font-medium">A smart platform to organize projects, manage tasks, and boost team productivity.Boost productivity through smart project planning and team collaboration."</p>
                {/* jobsearch */}
                {/* popularsearch */}
                <div className="text-base font-semibold text-gray-700 dark:text-gray-300 mt-6 flex items-center space-x-6">
                    <span>popular search:</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-light">Designer , Developer, Web , Ios , Php,Senior , Engineer</span>
                    <span className='text-sm text-gray-700 dark:text-gray-300 font-light'>A smart platform to organize projects, manage tasks, and boost team productivity.</span>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Intro
