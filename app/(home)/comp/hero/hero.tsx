"use client";

import React, { useState } from "react";
import HeroHeader from "./heroHeader";
import SearchSection from "./heroSearchSection";
import debounce from "@/app/utils/debounce";
import Image, { StaticImageData } from "next/image";
// import Videoplayer from "@/components/ui/video/video-player";
import about_us from "@/public/images/hero/img1.webp";
import HeroAnimated from "./HeroAnimated";



interface Course {
  xitemcode: string;
  xdesc: string;
  ximage: string |  StaticImageData;
}

const Hero = () => {
  // const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  // const [searchTerm, setSearchTerm] = useState("");

  // const handleSearch = debounce((e) => {
  //   const keyword = e.target.value.toLowerCase();
  //   setSearchTerm(keyword);

  //   if (!keyword.trim()) {
  //     setFilteredCourses([]);
  //     return;
  //   }

  //   const filtered = courses.filter(
  //     (course) =>
  //       course.xdesc.toLowerCase().includes(keyword) ||
  //       course.xitemcode.toLowerCase().includes(keyword)
  //   );

  //   setFilteredCourses(filtered);
  // }, 300);
  const images = [
    "/images/hero/img2.webp",
    "/images/hero/img3.webp",
     "/images/hero/img5.webp",
     "/images/hero/img4.webp",
     "/images/hero/img1.webp",
     "/images/hero/img6.webp",  
  ];

  return (
    <div className=" relative  lg:mb-0 mb-60" suppressHydrationWarning={true}>
       {/* <Image
        alt="home"
        src={about_us}
        width={1000}
        height={200}
        quality={95}
        className="w-full h-[40vh] md:h-[70vh] lg:h-[80vh] uws:h-[90vh]"
      /> */}
      {/* <HeroAnimated className='' images={images} />
      <div className="absolute  text-[35px] md:text-[60px] lg:text-[60px] regularBrush text-center w-full -mt-40 md:-mt-72 lg:-mt-80 uws:-mt-[500px] text-white">
        <p className="">Let's Start The Journey</p>
        <p className=""></p>
      </div> */}
      <div className="lg:h-[36rem] md:h-[25rem] h-[20rem] overflow-hidden">
        <HeroAnimated images={images} />
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-10/12">
        <div className="bg-gradient-to-b from-violet to-magenta text-white px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-10 text-center rounded-lg shadow-lg">
          <div className="text-start">
            <h1 className="lg:text-4xl  md:text-[32px] text-xl  font-extrabold font-newAcademy leading-tight">
             “Master Coding. Build Real Skills. Transform Your Future.”
            </h1>
            <h2 className="lg:text-base md:text-lg text-sm font-light font-montserrat mt-2">
              Hands-on coding courses with expert mentorship.
            </h2>

            <div className="flex flex-wrap lg:gap-4 md:gap-3 gap-2 bg-white w-fit py-2 px-6 sm:px-10 rounded-xl mt-4">
              {["DSA", "WEB DEVELOPMENT", "RESEARCH WORKSHOP", "VIDOE EDITING"].map(
                (item) => (
                  <div
                    key={item}
                    className="bg-primary hover:bg-black py-1.5 px-4 sm:px-6 rounded-sm transition"
                  >
                    <span className="text-sm sm:text-base text-white font-normal font-montserrat">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      </div>

  );
};

export default Hero;