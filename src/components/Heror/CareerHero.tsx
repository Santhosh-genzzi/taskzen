import Footer from "../footer/Footer"
import JobSearchBar from "./JobSearchBar"

const CareerHero = () => {
  return (
    <div className="relative py-16 px-8 w-full h-screen flex justify-center flex-col ">
        <div className="max-w-7xl md:max-w-6xl m-4 mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
            {/* text content */}
            <div  data-aos="fade-left"
  data-aos-delay="200"
  data-aos-anchor-placement="top-center">
                {/* heading */}
                <h1 className="text-3xl sm:text-6xl font-bold">Join us & Explore Thousands of Jobs</h1>
                {/* subheading */}
                <p className="mt-4 text-sm sm:text-lg font-medium">Find Jobs, Employement & Career Opportunities</p>
                {/* jobsearch */}
                <JobSearchBar/>
                {/* popularsearch */}
                <div className="text-base font-semibold text-gray-700 dark:text-gray-300 mt-6 flex items-center space-x-6">
                    <span>popular search:</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-light">Designer , Developer, Web , Ios , Php,Senior , Engineer</span>
                </div>
            </div>
            {/* image  content */}
            <div   data-aos="fade-right"
  data-aos-delay="200"
  data-aos-anchor-placement="top-center" className="mx-auto  xl:block">
                <img src="jobsearch.jpg" alt="hero" className="border-none outline-none" />
            </div>
        </div>
    
    </div>
  )
}

export default CareerHero
