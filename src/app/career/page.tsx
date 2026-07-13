
import CareerHero from '@/components/Heror/CareerHero'
import Category from '@/components/Heror/Category'
import Infor from '@/components/Heror/Infor'
import Job from '@/components/Heror/Job'
import TopCompany from '@/components/Heror/TopCompany'
import React from 'react'

const page = () => {
  return (
    <>
    <section id="career">
        <CareerHero/>
        <Category/>
        <Job/>
        <TopCompany/>
        <Infor/>
      </section>
    </>
  )
}

export default page
