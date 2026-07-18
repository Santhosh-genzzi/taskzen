"use client"



import React from 'react'
import Tilt from "react-parallax-tilt"


interface Props {
  category: {
    id: number;
    categoryName: string;
    openPosition: number;
    icon: React.JSX.Element;
  };
}



const Intro3Card = ({ category }: Props) => {
  return (
     <Tilt scale={1} transitionSpeed={500}>
        <div className="p-6 bg-gray-50 dark:bg-gray-900 shadow-md">
            <div className="w-14 h-16 bg-gray-200 dark:bg-gray-800 rounded-full mx-auto flex items-center justify-center flex-col">{category.icon}</div>
            <h1 className="mt-6 text-center font-medium text-grazy-800 dark:text-gray-200">{category.categoryName}</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm  text-center">{category.openPosition}openPosition</p>
        </div>
    </Tilt>
  )
}

export default Intro3Card
