import Image from 'next/image';
import React from 'react';
import news_letter from '@/public/images/home/about_us/about_us.png'
import Link from 'next/link';



export const news_letter_data = [
    {
        "id": 1,
        "title": "Software Engineering  interviews",
        "description": "What you should know in 2025."
      },
      {
        "id": 2,
        "title": "Software Engineering  interviews",
        "description": "What you should know in 2025."
      },
      {
        "id": 3,
        "title": "Software Engineering  interviews",
        "description": "What you should know in 2025."
      },
      {
        "id": 4,
        "title": "Software Engineering  interviews",
        "description": "What you should know in 2025."
      },
      {
        "id": 5,
        "title": "Software Engineering  interviews",
        "description": "What you should know in 2025."
      },
      {
        "id": 6,
        "title": "Software Engineering  interviews",
        "description": "What you should know in 2025."
      },
      {
        "id": 7,
        "title": "Software Engineering  interviews",
        "description": "What you should know in 2025."
      },
      {
        "id": 8,
        "title": "Software Engineering  interviews",
        "description": "What you should know in 2025."
      },
      {
        "id": 9,
        "title": "Software Engineering  interviews",
        "description": "What you should know in 2025."
      },
      {
        "id": 10,
        "title": "Software Engineering  interviews",
        "description": "What you should know in 2025."
      },
      {
        "id": 11,
        "title": "Software Engineering  interviews",
        "description": "What you should know in 2025."
      },
      {
        "id": 12,
        "title": "Software Engineering  interviews",
        "description": "What you should know in 2025."
      },
  ]
  
const page = () => {
    return (
        <div className="relative mx-auto">
        {/* <Image
                alt='success_story' 
                src={news_letter}
                width={1000} 
                height={200} 
               quality={95}
                className='w-full h-[240px] md:h-[370px] lg:h-[453px] uws:h-[600px]' 
            /> */}
               <div className="relative w-full h-[240px] md:h-[453px] lg:h-[453px] uws:h-[700px] -z-10 md:-mt-0 -mt-2">
              <Image
                alt="home"
                src={news_letter}
                fill
                quality={95}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />
            </div>
            <div className='absolute  text-[35px] md:text-[60px] lg:text-[60px] regularBrush text-center w-full -mt-32 md:-mt-60 lg:-mt-72 text-white'>
               <p className=''>newsletter</p>
                </div>


              
              <div className='xs:w-10/12 sm:10/12 w-7/12 grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 exl:grid-cols-2  uws:grid-cols-2 mx-auto mt-8'>
             
              {
                news_letter_data?.map((params,idx)=>(<Link href='#' key={idx} className='w-9/12 py-12 shadow-[#878787] shadow-md mb-8  px-4 flex flex-col justify-center rounded-[5px] mx-auto'>
                <p className=' xs:text-[20px] md:text-[25px] text-[32px] uws:text-[48px]  jaro xs:leading-[15px]   md:leading-[20px] uws:leading-[40px] text-[#ED1C24]'>{params.title}</p>
                <p className='text-[12px] montserat uws:text-[24px] mt-2'>{params.description}</p>
                </Link>))
              }
              </div>
                </div>
    );
};

export default page; 