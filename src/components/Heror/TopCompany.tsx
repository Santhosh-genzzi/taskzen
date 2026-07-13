"use client";

import SectionHeader from "../ui/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TopcompanyCard from "./TopcompanyCard";

const companyName=[
    {
        id:1,
        image:"jobsearch.jpg",
        name:"Mern stack developer",
        Locaation:"sellur,Madurai",
        position:"20"
    },
    {
        id:2,
        image:"https://img.magnific.com/free-vector/web-development-isometric-concept-composition-illustration_1284-55922.jpg?semt=ais_hybrid&w=740&q=80",
        name:"Java full stack role",
        Locaation:"sellur,Madurai",
        position:"30"
    },
    {
        id:3,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiIo7-5MK1sveEoAwO-IU55S2dRlc0qAq0Bg_XKaiw7g&s=10",
        name:"python full stack role",
        Locaation:"sellur,Madurai",
        position:"10"
    },
    {
        id:4,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG46xBXVD3JcgrNEoSgSB4iNlWq1qZbtSgbDpprVcmog&s=10",
        name:"AI/MI intern",
        Locaation:"sellur,Madurai",
        position:"30"
    }
]

const TopCompany = () => {
  return (
    <div className="pt-16 pb-16 px-7 py-10">
      <SectionHeader
        badge="Top position are hiring"
        title="The task should be assign in Genzzi.in"
        description="Join Genzzi's remote-first team. We orchestrate digital tools that feel like liquid glass—highly refined, tactile, and responsive"
      />

      <div className="max-w-4xl mx-auto mt-16">
      <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  slidesPerView={3}
  spaceBetween={30}
  loop={true}
  navigation
  pagination={{ clickable: true }}
  autoplay={{
    delay: 2200,
    disableOnInteraction: false,
  }}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }}
>
  {companyName.map((data) => (
    <SwiperSlide key={data.id}>
      <TopcompanyCard data={data} />
    </SwiperSlide>
  ))}
</Swiper>
      </div>
    </div>
  );
};

export default TopCompany;