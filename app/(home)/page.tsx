import Image from "next/image";
import Hero from "./comp/hero/hero";
import courseImage from '@/public/images/home/courses/digital_marketing2.png'
import CourseCarousel from "./comp/courseCarousel/courseCarousel";
import HomeSlider from "./comp/homeSlider/homeSlider";
import FutureCareer from "./comp/futureCareer/futureCareer";
import Gallery from "./comp/gallery/gallery";
import { courses } from "@/utils/homeData";

export default function Home() {
  // const courses1 = [
  //   {
  //       xitemcode: '101',
  //       xdesc: 'thisisdesc',
  //       ximage: courseImage,
  //     },
  //     {
  //       xitemcode: '101',
  //       xdesc: 'thisisdesc',
  //       ximage: courseImage,
  //     },
  //     {
  //       xitemcode: '101',
  //       xdesc: 'thisisdesc',
  //       ximage: courseImage,
  //     },
  //     {
  //       xitemcode: '101',
  //       xdesc: 'thisisdesc',
  //       ximage: courseImage,
  //     },
  // ]

  
  return (
    <div className="">
    <Hero ></Hero>
    <FutureCareer></FutureCareer>
    <CourseCarousel cards={false} courses = {courses}></CourseCarousel>
    <Gallery></Gallery>
    </div>
  );
}


  