import Image from "next/image";
import React, { ReactNode } from "react";
import mentors_img from "@/public/images/home/mentors/mentors2.png";
import mentors_header from "@/public/images/home/courses/courses.png";
import Link from "next/link";
import { FcManager } from "react-icons/fc";

const public_mentor_image_path = process.env.NEXT_PUBLIC_FILE_PATH_TEACHER!;
export type Mentor = {
  xteacher: number;
  xteachername: string;
  xexpartarea: string;
  xsortindex: number;
  ximage?: string;
  xowndesc?: string;
  edu?: string;
  works?: string | ReactNode;
};
const mentors: Mentor[] = [
  {
    xteacher: 101,
    xteachername: "Tanzib Mahammad",
    xexpartarea: "Research Workshop & DSA",
    xsortindex: 1,
    // ximage: "/images/home/mentors/mentors.png",
    // xowndesc: "A passionate AI researcher with 10+ years of experience in Machine Learning and Deep Learning.",
    edu: "CSE,AIUB",
    works: (
      <>
        <span>
          RA @QCRI - CODE GEN & RAG <br /> Former RA@ AIUB - FL & DS
        </span>
      </>
    ),
  },
  {
    xteacher: 102,
    xteachername: "Sowrov Ahmed",
    xexpartarea: "Full Stack Web Development",
    xsortindex: 2,
    // ximage: "/images/home/mentors/mentors.png",
    // xowndesc: "Experienced full-stack developer skilled in MERN and Django frameworks.",
    edu: "CSE,AIUB",
    works: "Works at Digital Marketplace",
  },
  {
    xteacher: 103,
    xteachername: "MD.Shaiful Islam",
    xexpartarea: "Full Stack Web Development",
    xsortindex: 3,
    // ximage: "/images/home/mentors/mentors.png",
    // xowndesc: "Certified Ethical Hacker (CEH) with expertise in penetration testing and digital forensics.",
    edu: "CSE,AIUB",
    works: "Software Engineer at DBSL",
  },
  {
    xteacher: 104,
    xteachername: "Nazrul Islam",
    xexpartarea: "Digital Electronics & Logic Design",
    xsortindex: 4,
    // ximage: "/images/home/mentors/img1.jpg",
    // xowndesc: "Creative UI/UX designer with 8 years of experience in product design and user experience.",
    edu: "EEE,AIUB",
    works: "Assistant Engineer at Dana Group",
  },
  {
    xteacher: 105,
    xteachername: "Rakibul Islam",
    xexpartarea: "Video Editing",
    xsortindex: 4,
    // ximage: "/images/home/mentors/mentors.png",
    // xowndesc: "Creative UI/UX designer with 8 years of experience in product design and user experience.",
    edu: "CSE,AIUB",
    works: "Works at Digital Marketplace",
  },
];

const page = async () => {
  return (
    <div className="relative mx-auto ">
      {/* <Image
        alt="success_story"
        src={mentors_header}
        width={1000}
        height={200}
        quality={95}
        className="w-full h-[240px] md:h-[400px] lg:h-[453px] uws:h-[650px]"
      /> */}
      <div className="relative w-full h-[240px] md:h-[453px] lg:h-[453px] uws:h-[700px] -z-10 md:-mt-0 -mt-2">
        <Image
          alt="home"
          src={mentors_header}
          fill
          quality={95}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      </div>
      <div className="absolute  text-[35px] md:text-[60px] lg:text-[60px] regularBrush text-center w-full -mt-32 md:-mt-60 lg:-mt-72 text-white">
        <p className="">mentors</p>
      </div>
      <div className=" w-9/12 mx-auto mt-12 md:mt-20 lg:mt-28 uws:mt-40 grid xs:grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg: grid-cols-4 exl:grid-cols-4 uws:grid-cols-4">
        {mentors?.map((mentor, idx: number) => (
          <Link
            href={`#`}
            key={idx}
            className={
              "w-11/12 xs:h-[200px] md:h-[250px] lg:h-[465px] uws:h-[650px] text-center xs:mt-1 mt-8 flex flex-col items-center lg:mb-0 md:mt-7 mb-12"
            }
          >
            <div
              className={` ${
                mentor?.ximage ? "bg-red-600" : "bg-zinc-100/90 shadow-sm"
              }
                relative  rounded-full w-24 h-24 sm:w-28 sm:h-28 md:h-32 md:w-32 lg:w-60 lg:h-60 uws:h-96 uws:w-96 flex justify-center items-center`}
            >
              <div className="rounded-full w-20 h-24 sm:w-24 sm:h-28 md:w-28 md:h-32 lg:w-60 lg:h-60  uws:h-96 uws:w-[360px] flex justify-center items-center">
                {mentor?.ximage ? (
                  <Image
                    src={mentor?.ximage}
                    alt="Mentor Image"
                    width={200}
                    height={200}
                    className="rounded-full object-cover h-28 sm:h-32 md:h-36 lg:h-72 uws:h-[400px]   uws:w-full xs:-mt-4 sm:-mt-3 md:-mt-4 lg:-mt-10 uws:-mt-5"
                  />
                ) : (
                  // <Image
                  //   src={mentors_img}
                  //   alt="Mentor Image"
                  //   width={1000}
                  //   height={200}
                  //   className="rounded-full object-cover w-full"
                  // />
                  <FcManager className=" bg-red-600 rounded-full object-cover w-full h-full " />
                )}
              </div>
            </div>
            <h3 className="text-black  md:text-[22px] lg:text-[36px] mt-4 lg:mt-8 uws:text-[50px] jaro leading-tight">
              {mentor?.xteachername}
            </h3>
            <p className="text-black text-[11px] md:text-[13px] lg:text-[16px] uws:text-[24px] montserrat leading-none">
              Instructor
            </p>
            <p
              dangerouslySetInnerHTML={{
                __html: mentor?.xexpartarea as string,
              }}
              className="text-black text-[11px] md:text-[13px] lg:text-[16px] uws:text-[24px] montserrat leading-none"
            ></p>
            <p
              dangerouslySetInnerHTML={{
                __html: mentor?.edu as string,
              }}
              className="text-black text-[11px] md:text-[13px] lg:text-[16px] uws:text-[24px] montserrat leading-none"
            ></p>
            {typeof mentor?.works === "string" ? (
              <p
                className="text-black text-[11px] md:text-[13px] lg:text-[16px] uws:text-[24px] montserrat leading-none"
                dangerouslySetInnerHTML={{ __html: mentor?.works }}
              />
            ) : (
              <p className="text-black text-[11px] md:text-[13px] lg:text-[16px] uws:text-[24px] montserrat leading-none">
                {mentor?.works}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
