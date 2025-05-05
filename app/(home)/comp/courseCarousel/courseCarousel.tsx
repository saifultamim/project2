"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";


interface Course {
  id:number,
  xitemcode: string;
  xdesc: string;
  ximage: string;
  xstdprice: string;
  xmrp: number | null;
}

export const public_image_path = process.env.NEXT_PUBLIC_FILE_PATH_COURSE!;

const CourseCarousel = ({
  cards = true,
  courses,
}: {
  cards?: boolean;
  courses: Course[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [selectIndex, setSelectIndex] = useState<number>(0);
  const [val, setVal] = useState(1);
  const [loading, setLoading] = useState(true);
  const router = useRouter()
//  console.log('==== courses =========== ',courses)
  const handleSlider = (param: string) => {
    if (param == "next") {
      setSelectIndex(currentIndex);
      if (courses) {
        if (courses && courses.length > 1) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
        } else {
          if (courses && courses.length > 1) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
          }
        }
      }
    } else {
      setVal((prevVal) => {
        const newVal = prevVal + 1;
        if (newVal >= courses.length) return 1; // Reset to 1 when exceeding length
        return newVal;
      });
      if (cards) {
        if (courses && courses.length > 1) {
          setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + courses.length) % courses.length;
            return newIndex;
          });
        }
      } else {
        if (courses && courses.length > 1) {
          setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + courses.length) % courses.length;
            return newIndex;
          });
        }
      }

      setSelectIndex((prevSelectIndex) => {
        const newIndex =
          (prevSelectIndex - 1 + courses.length) % courses.length;
        return newIndex;
      });
    }
  };

  let displayedCourse;
  if (cards) {
    if (courses.length > 2) {
      displayedCourse = [
        courses[currentIndex],
        courses[(currentIndex + 1) % courses.length],
      ];
    }
  } else {
    if (courses.length > 3) {
      displayedCourse = [
        courses[currentIndex],
        courses[(currentIndex + 1) % courses.length],
        courses[(currentIndex + 2) % courses.length],
      ];
    }
  }

  // Get 3 cards to show at a  time
  const smallDisplayedCourse = courses.slice(currentIndex, currentIndex + 1);

  const handleCourse = (course: Course) => {
    router.push(`/course/${course.id}`)
    console.log('**********',course)
  };
  //console.log('++++ ',courses.map((params,idx)=>{console.log(params.xdesc, ' = ',params.xdesc.length)}))


  return (
    <div className=" mt-16 h-[300px] md:h-[600px] lg:h-[700px]  uws:h-[950px] flex justify-center px-8 bg-black">
      <div className="flex flex-row md:flex-row lg:flex-row items-end absolute -mt-6 lg:-mt-10 md:px-4 ">
        <div className="border-b-4 border-b-[#DA0041] w-36 sm:w-44  mx-auto md:w-[250px] md:h-[530px]  lg:w-[302px] h-[300px] lg:h-[580px] uws:w-[600px] uws:h-[850px] ">
          <div className=" md:w-[250px] md:h-[500px] lg:w-[302px] h-[280px] lg:h-[529px] border-2 border-white p-3 bg-black rounded-[13px] uws:w-[600px] uws:h-[800px] ">
            {courses && courses?.length != 0 && (
              <Link
                // href={`/course/${courses?.[selectIndex]?.id}`}
                href={`/course/${courses?.[selectIndex]?.id}`}
                // href={`#`}
              >
                <div className="relative  h-40 md:h-[300px] lg:h-72 uws:w-full uws:h-[520px]">
                  {courses?.[selectIndex]?.ximage ? (
                    <Image
                      alt={`Card ${courses?.[selectIndex]?.xitemcode}`}
                      src={
                        // public_image_path + "/" + courses?.[selectIndex]?.ximage
                         courses?.[selectIndex]?.ximage
                      }
                      width={376}
                      height={272}
                      className=" w-full  rounded-[13px]"
                    />
                  ) : (
                    <Image
                      alt={`Card ${courses?.[selectIndex]?.xitemcode}`}
                      src={`/images/courses/career.jpg`}
                      width={262}
                      height={202}
                      className="w-full h-full rounded-lg"
                    />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 xs:h-24 sm:h-20 md:h-48 lg:h-36 uws:h-56  bg-black blur opacity-60 border border-red-600"></div>
                </div>

                <div className="text-white mt-2 md:mt-4 lg:mt-4 flex flex-col justify-between h-[90px] md:h-36 lg:h-44">
                  <p
                    className=" text-[14px] md:text-[30px] lg:text-[40px] uws:text-[50px] leading-none jaro"
                    title={`${courses?.[selectIndex]?.xdesc}`}
                  >
                    {courses?.[selectIndex]?.xdesc.length > 28
                      ? courses?.[selectIndex]?.xdesc.slice(0, 28) + " ..."
                      : courses?.[selectIndex]?.xdesc}
                  </p>

                  {/* <p className="text-[10px]  mx:text-[16px] lg:text-[16px] uws:text-[20px] leading-none montserrat">
                {courses?.[selectIndex]?.xdesc}
              </p> */}
                  <button className="lg:w-[262px] h-[40px] uws:h-[60px] uws:text-[30px] rounded-[6px]  bg-[#ED1C24]  jaro w-full">
                    Enroll Now  ssss  {typeof(courses?.[selectIndex]?.id)} 
                  </button>
                </div>
              </Link>
            )}
          </div>
        </div>

        <div className="md:space-x-4 lg:space-x-8 ">
          <div className=" text-white text-left mb-4 ">
            <div className="text-xl font-bold w-fit ml-4 lg:ml-8 flex items-center">
              <p className="md:text-[36px] lg:text-[48px] uws:text-[56px] montserrat">
                Courses{" "}
                <span className="text-[10.45px] uws:text-[17px]">We Offer</span>
              </p>
            </div>
          </div>

       
            <div className="flex items-center mb-6 space-x-4 px-4 md:px-3 lg:px-0">
              <button
                onClick={() => handleSlider("previous")}
                className="bg-red-600 text-white p-2 rounded-full"
              >
                <FaArrowLeft className="text-black uws:text-[60px]" />
              </button>
              <button
                onClick={() => handleSlider("next")}
                className="bg-red-600 text-white p-2 rounded-full"
              >
                <FaArrowRight className="text-black uws:text-[60px]" />
              </button>
            </div>
        
         {/* =============================================== large devices ================================= */}
          <div className=" mt-3   flex flex-col items-center">
            <div className=" w-full flex justify-center space-x-2  md:space-x-4 lg:space-x-4 px-4 md:px-3  lg:px-0">
              {(cards === true && courses.length > 2) ||
              (cards === false && courses.length > 3)
                ? displayedCourse?.map((course) => (
                    <div
                      key={course.xitemcode}
                      onClick={() => handleCourse(course)}
                      className={`hidden sm:hidden md:block lg:block exl:block uws:block 
                         ${
                        cards
                          ? "md:w-[170px] lg:w-[240px] exl:w-[300px]"
                          : " md:w-[130px]  lg:w-[200px] exl:w-[300px] "
                      }
p-1 md:p-4 lg:p-4  rounded-[10px] lg:rounded-[18px] uws:w-[450px]  cursor-pointer  bg-white`}
                    >
                      <div className=" relative  h-28 md:h-[100px] lg:h-36 exl:h-48 uws:w-full uws:h-[350px] ">
                        {course?.ximage ? (
                          <Image
                            alt={`Card ${course.xitemcode}`}
                            src={course?.ximage}
                            width={262}
                            height={202}
                            className="w-full h-full rounded-lg"
                          />
                        ) : (
                          <Image
                            alt={`Card ${course.xitemcode}`}
                            // src={`/images/courses/${course.ximage}`}
                            src={`/images/home/brand.png`}
                            width={262}
                            height={202}
                            className="w-full h-full rounded-lg"
                          />
                        )}
                      </div>

                      <div className="mt-2 text-black">
                        <Link
                          href={`#`}
                          title={`${course?.xdesc}`}
                          className="inline-block text-[12px] md:text-[16px] leading-none md:leading-none lg:text-[20px] exl:text-[32px] uws:text-[36px] jaro h-[70px] exl:h-[105px]"
                        >
                          {courses?.[selectIndex]?.xdesc.length > 24
                            ? course.xdesc.slice(0, 24) + " ..."
                            : course.xdesc}
                        </Link>

                        <div className="flex justify-between mt-2">
                          <p className="text-[10px] md:text-[10px] lg:text-[16px] montserrat flex items-center">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-2xl"
                              height="0.8em"
                              width="0.8em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M16.5 15.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                              <path d="M7 7a2 2 0 1 1 4 0v9a3 3 0 0 0 6 0v-.5"></path>
                              <path d="M8 11h6"></path>
                            </svg>

                            <span>{Number(course?.xmrp)?.toFixed(2)}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                : courses?.map((course) => (
                    <div
                      key={course.xitemcode}
                      onClick={() => handleCourse(course)}
                      className={`hidden sm:hidden md:block  lg:block exl:block uws:block ${
                        cards
                          ? "lg:w-[270px]  exl:w-[300px]"
                          : "lg:w-[200px]  exl:w-[300px] "
                      }
p-1 md:p-4 lg:p-4 bg-white rounded-[10px] lg:rounded-[18px] uws:w-[450px] cursor-pointer `}
                    >
                      <div className=" relative  h-28 md:h-[100px] lg:h-36 exl:h-48 uws:w-full uws:h-[350px] ">
                        {course?.ximage ? (
                          <Image
                            alt={`Card ${course.xitemcode}`}
                            src={course?.ximage}
                            width={262}
                            height={202}
                            className="w-full h-full rounded-lg"
                          />
                        ) : (
                          <Image
                            alt={`Card ${course.xitemcode}`}
                            src={`/images/home/brand.png`}
                            width={262}
                            height={202}
                            className="w-full h-full rounded-lg"
                          />
                        )}
                      </div>

                      <div className="mt-2 text-black">
                        <Link
                          href={`/course/${course.xitemcode}`}
                          title={`${course?.xdesc}`}
                          className="inline-block text-[12px] md:text-[16px] leading-none md:leading-none lg:text-[20px] exl:text-[32px] uws:text-[36px] jaro h-[70px] exl:h-[105px]"
                        >
                          {courses?.[selectIndex]?.xdesc.length > 24
                            ? course.xdesc.slice(0, 24) + " ..."
                            : course.xdesc}
                        </Link>

                        <div className="flex justify-between mt-2">
                          <p className="text-[10px] md:text-[10px] lg:text-[16px] montserrat flex items-center">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="text-2xl"
                              height="0.8em"
                              width="0.8em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M16.5 15.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                              <path d="M7 7a2 2 0 1 1 4 0v9a3 3 0 0 0 6 0v-.5"></path>
                              <path d="M8 11h6"></path>
                            </svg>
                            {Number(course?.xmrp)?.toFixed(2)}
                          </p>
                          {/* <p className="text-[10px] md:text-[10px] lg:text-[15px] montserrat">
                            {course.xstdprice}
                          </p> */}
                        </div>
                      </div>
                    </div>
                  ))}
              {/* =============================== small devices ==================================== */}
              {(cards === true && courses.length >= 1) ||
              (cards === false && courses.length >= 1) ? (
                smallDisplayedCourse.map((course) => (
                  <div
                    key={course.xitemcode}
                    onClick={() => handleCourse(course)}
                    className="relative block sm:block md:hidden lg:hidden exl:hidden uws:hidden w-28 h-40 p-1 bg-white rounded-[10px] cursor-pointer py-2"
                  >
                    <div className=" h-20 ">
                      {course?.ximage ? (
                        <Image
                          alt={`Card ${course.xitemcode}`}
                        //   src={public_image_path + "/" + course?.ximage}
                        src={ course?.ximage}
                          width={262}
                          height={202}
                          className="w-full h-full rounded-md"
                        />
                      ) : (
                        <Image
                          alt={`Card ${course.xitemcode}`}
                          src={`/images/home/brand.png`}
                          width={262}
                          height={202}
                          className="w-full h-full rounded-md"
                        />
                      )}
                    </div>
                    <div className="mt-2 text-black h-14 grid items-between">
                      <Link
                        href={`/course/${course.xitemcode}`}
                        title={`${course?.xdesc}`}
                        className="inline-block text-[12px] md:text-lg leading-none md:leading-none lg:text-[28px] exl:text-[32px] uws:text-[36px] jaro h-7 "
                      >
                        {courses?.[selectIndex]?.xdesc.length > 28
                          ? course.xdesc.slice(0, 28) + " ..."
                          : course.xdesc}
                      </Link>

                      <div className="flex justify-between mt-2">
                        <p className="text-[10px] md:text-[10px] lg:text-[16px] montserrat flex items-center">
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-lg"
                            height="0.8em"
                            width="0.8em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16.5 15.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                            <path d="M7 7a2 2 0 1 1 4 0v9a3 3 0 0 0 6 0v-.5"></path>
                            <path d="M8 11h6"></path>
                          </svg>
                          {Number(course?.xmrp)?.toFixed(2)}
                        </p>

                        <p className="text-[10px] md:text-[10px] lg:text-[15px] montserrat">
                          {course.xstdprice}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-1 px-8 border rounded">
                  <p className="text-xs md:text-sm font-medium text-red-400">
                    No courses available
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCarousel;