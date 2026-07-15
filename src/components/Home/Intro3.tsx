import React from 'react'
import SectionHeader from '../ui/SectionHeader'
import Intro3Card from './Intro3Card'

const categoryData=[
    {
        id:1,
        categoryName:"software",
        openPosition:10,
        icon:<img src="https://img.magnific.com/free-vector/web-development-isometric-concept-composition-illustration_1284-55922.jpg?semt=ais_hybrid&w=740&q=80" className="w-10 h-10  dark:text-white rounded-full"/>
    },
    {
        id:2,
        categoryName:"Network",
        openPosition:20,
        icon:<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiIo7-5MK1sveEoAwO-IU55S2dRlc0qAq0Bg_XKaiw7g&s=10" className="w-10 h-10 text-gray-500 dark:text-white rounded-full"/>
    },
    {
        id:3,
        categoryName:"Deployment",
        openPosition:28,
        icon:<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Z2SX3Aq2B8Cuzu8rfm54l9f35XNIarJSrp8iNt1SsQ&s=10" className="w-10 h-10 text-gray-500 dark:text-white rounded-full"/>
    },
    {
        id:4,
        categoryName:"programing",
        openPosition:20,
        icon:<img src="https://cdn.manageengine.com/sites/meweb/images/os-deployer/images/osd-top-banner-1.png" className="w-10 h-10 text-gray-500 dark:text-white rounded-full"/>
    },
    {
        id:5,
        categoryName:"Full stack intern",
        openPosition:20,
        icon:<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG46xBXVD3JcgrNEoSgSB4iNlWq1qZbtSgbDpprVcmog&s=10" className="w-10 h-10 text-gray-500 dark:text-white rounded-full"/>
    }
]




const Intro3 = () => {
  return (
    
    <div className="pt-7 pb-16 px-13 py-12">
        <SectionHeader badge="popular career categories" title="2026 jobs live -  added today" />
        <div   data-aos="fade-up"
  data-aos-delay="100"
  data-aos-anchor-placement="top-center" className="max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryData.map((category)=>(
                <div key={category.id}>
                    <Intro3Card category={category}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Intro3
