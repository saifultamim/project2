import Image from 'next/image';
import React from 'react';
import news_letter from '@/public/images/home/news_letter/news_letter.png'
import Link from 'next/link';



export const news_letter_data = [
    {
        "id": 1,
        "title": "Sales interviews",
        "description": "What you should know in 2024."
      },
      {
        "id": 2,
        "title": "Sales interviews",
        "description": "What you should know in 2024."
      },
      {
        "id": 3,
        "title": "Sales interviews",
        "description": "What you should know in 2024."
      },
      {
        "id": 4,
        "title": "Sales interviews",
        "description": "What you should know in 2024."
      },
      {
        "id": 5,
        "title": "Sales interviews",
        "description": "What you should know in 2024."
      },
      {
        "id": 6,
        "title": "Sales interviews",
        "description": "What you should know in 2024."
      },
      {
        "id": 7,
        "title": "Sales interviews",
        "description": "What you should know in 2024."
      },
      {
        "id": 8,
        "title": "Sales interviews",
        "description": "What you should know in 2024."
      },
      {
        "id": 9,
        "title": "Sales interviews",
        "description": "What you should know in 2024."
      },
      {
        "id": 10,
        "title": "Sales interviews",
        "description": "What you should know in 2024."
      },
      {
        "id": 11,
        "title": "Sales interviews",
        "description": "What you should know in 2024."
      },
      {
        "id": 12,
        "title": "Sales interviews",
        "description": "What you should know in 2024."
      },
  ]
  
const page = () => {
    return (
        <div className="relative mx-auto">
        <Image
                alt='success_story' 
                src={news_letter}
                width={1000} 
                height={200} 
               quality={95}
                className='w-full h-[240px] md:h-[370px] lg:h-[453px] uws:h-[600px]' 
            />
            <div className='absolute  text-[35px] md:text-[60px] lg:text-[60px] regularBrush text-center w-full -mt-32 md:-mt-60 lg:-mt-72 text-white'>
               <p className="">career</p>
                </div>
                        
                               <div className=" py-8 px-4 rounded mt-16">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Available Vacancies</h1>
              <p className="text-center text-red-600 text-xl font-bold">No Vacancies Available...</p>
                        </div>

                </div>
    );
};

export default page; 