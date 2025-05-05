import React from "react";
import coursesBanner from "@/public/images/home/courses/courses.png";
import Image from "next/image";
import CourseCard from "../comp/courseCard/courseCard";
import { courses } from "@/utils/homeData";
// import { getCourses } from "@/utils/getCourses";
// import CourseCard from "./CourseCard";

export const revalidate = 20;

const page = async () => {
//   const courses = await getCourses();
// const courses = [
//     {
//       xitemcode: "CSE101",
//       xdesc: "Introduction to Computer Science",
//       ximage: "/images/home/courses/digital_marketing2.png",
//       xstdprice: "5000",
//       xmrp: 6000,
//     },
//     {
//       xitemcode: "WD102",
//       xdesc: "Full Stack Web Development",
//       ximage: "/images/home/courses/digital_marketing2.png",
//       xstdprice: "8000",
//       xmrp: 10000,
//     },
//     {
//       xitemcode: "DSA103",
//       xdesc: "Data Structures and Algorithms",
//       ximage: "/images/home/courses/digital_marketing2.png",
//       xstdprice: "7000",
//       xmrp: 8500,
//     },
//     {
//       xitemcode: "AI104",
//       xdesc: "Artificial Intelligence Basics",
//       ximage: "/images/home/courses/digital_marketing2.png",
//       xstdprice: "9000",
//       xmrp: 11000,
//     },
//     {
//       xitemcode: "ML105",
//       xdesc: "Machine Learning with Python",
//       ximage: "/images/home/courses/digital_marketing2.png",
//       xstdprice: "9500",
//       xmrp: 12000,
//     },
//     {
//       xitemcode: "DB106",
//       xdesc: "Database Management Systems",
//       ximage: "/images/home/courses/digital_marketing2.png",
//       xstdprice: "6000",
//       xmrp: 7500,
//     },
//     {
//       xitemcode: "UIUX107",
//       xdesc: "UI/UX Design Fundamentals",
//       ximage: "/images/home/courses/digital_marketing2.png",
//       xstdprice: "5500",
//       xmrp: 7000,
//     },
//     {
//       xitemcode: "SEC108",
//       xdesc: "Cyber Security for Beginners",
//       ximage: "/images/home/courses/digital_marketing2.png",
//       xstdprice: "10000",
//       xmrp: 13000,
//     },
//     {
//       xitemcode: "CLOUD109",
//       xdesc: "Cloud Computing with AWS",
//       ximage: "/images/home/courses/digital_marketing2.png",
//       xstdprice: "8500",
//       xmrp: 10500,
//     },
//     {
//       xitemcode: "BLOCK110",
//       xdesc: "Blockchain and Cryptocurrency",
//       ximage: "/images/home/courses/digital_marketing2.png",
//       xstdprice: "12000",
//       xmrp: null,
//     },
//   ];
  return (
    <div className="relative">
      <Image
        alt="home"
        src={coursesBanner}
        width={1000}
        height={200}
        quality={95}
        className="w-full h-[240px] md:h-[370px] lg:h-[453px] uws:h-[700px]"
      />
      <div className="absolute  text-[35px] md:text-[60px] lg:text-[60px] regularBrush text-center w-full -mt-32 md:-mt-56 lg:-mt-72 uws:-mt-96 text-white">
        <p className="">Who We Offer</p>
      </div>

      <div className="bg-gray-200/50 px-3 py-6 md:px-8 md:py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-black text-left mb-6">
            <p className="md:text-[36px] lg:text-[48px] uws:text-[56px] montserrat text-center">
              Courses{" "}
              <span className="text-[10.45px] uws:text-[17px]">We Offer</span>
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 exl:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
            {courses?.map((course: any) => (
              <CourseCard key={course.xitemcode} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;