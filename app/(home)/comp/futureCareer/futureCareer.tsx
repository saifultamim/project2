import Image from "next/image";
import React from "react";

const FutureCareer = () => {
  return (
    // <div className=" mt-12 mb-24   md:mt-36 lg:mt-32 lg:mb-44   uws:mt-72 w-5/6 lg:w-[986px] uws:w-[1500px]  mx-auto text-center border border-black">
    <div className=" mt-16 mb-24   md:mt-36 lg:mt-40 lg:mb-44   uws:mt-48 w-5/6 md:w-4/6   mx-auto text-center">
      <Image
        alt="logo"
        src="/images/home/brand.png"
        width={302}
        height={68}
        quality={90}
        className=" mx-auto"
      />

      <div>
        <div className="mt-4">
          <p className="text-[16px] md:text-[24px] lg:text-[24px] uws:text-[30px] jaro -mb-4 md:-mb-5  lg:-mb-6">
          CodeCamp IT
          </p>
          <p className="text-[35px] md:text-[64px] lg:text-[64px] regularBrush text-[#5C5C5C] mt-3">
            Future Career
          </p>
        </div>
        <div className="text-[14px] uws:text-[30px]  inter mt-4">
          <p>
        <span className='font-newAcademy text-xl'>CodeCamp IT</span> is a forward-thinking edtech organization committed to empowering individuals by developing their digital skills. We provide a broad array of practical courses, such as Data Structure & Algorithm,Web Development,Research Workshop and other highly sought-after fields. Our programs are designed to meet the needs of ambitious professionals and career-focused learners, providing them with industry-relevant skills to thrive in the digital world.


          </p>
          <br />
          <p>
    At <span className='font-newAcademy text-xl'>CodeCamp IT</span>, we emphasize hands-on learning, with guidance from experienced mentors who share real-world knowledge in every class. Our goal is to transform learners into proficient professionals by creating a supportive and engaging environment that helps them succeed. Whether in virtual classrooms or interactive sessions, we ensure that each course combines foundational knowledge with practical applications, preparing students for successful careers in the ever-evolving digital industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FutureCareer;