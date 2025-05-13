"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const MobileMenu = ({ courses }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [color, setChangeColor] = useState("");
  const aboutUsRef = useRef<HTMLDivElement | null>(null);
  const coursesRef = useRef<HTMLDivElement | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Dropdown toggle handlers
  const toggleAboutUsDropdown = () => {
    setIsAboutUsOpen((prev) => !prev);
  };

  const toggleCoursesDropdown = () => {
    setIsCoursesOpen((prev) => !prev);
  };

  // Close dropdowns when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false); // Close the mobile menu if click is outside the navbar
    }

    if (
      aboutUsRef.current &&
      !aboutUsRef.current.contains(event.target as Node)
    ) {
      setIsAboutUsOpen(false);
    }

    if (
      coursesRef.current &&
      !coursesRef.current.contains(event.target as Node)
    ) {
      setIsCoursesOpen(false);
    }
  };

  const closeDropdowns = () => {
    setIsAboutUsOpen(false);
    setIsCoursesOpen(false);
    setIsOpen(false); // Close mobile menu when a link is clicked
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleColorChange = (name: string) => {
    setChangeColor(name);
    //console.log('hello world')
  };
  return (
    <>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <IoClose /> : <TiThMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full xs:bg-black sm:bg-black md:bg-black text-white flex flex-col items-start py-4 lg:hidden ">
          {/* ABOUT US */}
          <div className="relative w-full px-4" ref={aboutUsRef}>
            <div className="flex">
              <button className="w-full text-left hover:bg-gray-700 px-2 py-2 flex justify-between">
                <Link
                  href="/about-us"
                  className={`${
                    color == "aboutus" ? "text-red-600" : "text-white"
                  }`}
                  onClick={() => {
                    closeDropdowns();
                    handleColorChange("aboutus");
                  }}
                >
                  ABOUT US
                </Link>
              </button>
              <Image
                alt="sort_down"
                src="/images/home/sort_down.png"
                width={19}
                height={19}
                className="mr-2 h-6 "
                onClick={toggleAboutUsDropdown}
              />
            </div>
            {/* </button> */}
            {isAboutUsOpen && (
              <div className="z-20  top-full left-0 bg-white text-white rounded shadow-lg  w-auto">
                <Link
                  href="/mentors"
                  className={`block px-6 py-2 hover:bg-gray-200 ${
                    color == "overview" ? "text-red-600" : "text-black"
                  }`}
                  onClick={() => {
                    closeDropdowns();
                    handleColorChange("overview");
                  }}
                >
                  Our Mentors
                </Link>
                <Link
                  href="/photo-gallery"
                  className={`block px-6 py-2 hover:bg-gray-200 ${
                    color == "ourMission" ? "text-red-600" : "text-black"
                  }`}
                  onClick={() => {
                    closeDropdowns();
                    handleColorChange("ourMission");
                  }}
                >
                  Photo gallery
                </Link>
              </div>
            )}
          </div>

          {/* COURSES */}
          <div className="relative  w-full px-4" ref={coursesRef}>
            <div className="flex">
              <button className="w-full text-left hover:bg-gray-700 px-2 py-2 flex justify-between">
                <Link
                  href="/courses"
                  className={`${
                    color == "courses" ? "text-red-600" : "text-white"
                  }`}
                  onClick={() => {
                    closeDropdowns();
                    handleColorChange("courses");
                  }}
                >
                  COURSES
                </Link>
              </button>
              <Image
                alt="sort_down"
                src="/images/home/sort_down.png"
                width={19}
                height={19}
                className="mr-2 h-6"
                onClick={toggleCoursesDropdown}
              />
            </div>

            {isCoursesOpen && (
              <div className="top-full left-0 bg-white text-white rounded shadow-lg  w-auto">
                {courses && courses.length > 0 ? (
                  courses.map((course: any,idx:any) => (
                    <Link
                      key={idx}
                      href={`/course/${course?.id}`}
                      className={`block px-6 py-2 hover:bg-gray-200 ${
                        color == course.xdesc ? "text-red-600" : "text-black"
                      }`}
                      onClick={() => {
                        closeDropdowns();
                        handleColorChange(course.xdesc);
                      }}
                    >
                      {course.xdesc}
                    </Link>
                  ))
                ) : (
                  <div className="px-4 py-2 text-sm text-gray-500">
                    No courses available
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Other Links */}
          <Link
            href="/success-story"
            className={`text-lg hover:bg-gray-700 px-6 py-2 ${
              color == "successStory" ? "text-red-600" : "text-white"
            }`}
            onClick={() => {
              closeDropdowns();
              handleColorChange("successStory");
            }}
          >
            SUCCESS STORY
          </Link>

          <Link
            href="/career"
            className={`text-lg hover:bg-gray-700 px-6 py-2 ${
              color == "career" ? "text-red-600" : "text-white"
            }`}
            onClick={() => {
              closeDropdowns();
              handleColorChange("career");
            }}
          >
            CAREER
          </Link>
        
           <Link
            href="/contact"
            className={`text-lg hover:bg-gray-700 px-6 py-2 ${
              color == "contact" ? "text-red-600" : "text-white"
            }`}
            onClick={() => {
              closeDropdowns();
              handleColorChange("contact");
            }}
          >
            CONTACT
          </Link>
      
        </div>
      )}
    </>
  );
};

export default MobileMenu;