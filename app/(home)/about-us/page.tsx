import React from "react";
import about_us from "@/public/images/home/about_us/about_us.png";
import Image from "next/image";
import FutureCareer from "../comp/futureCareer/futureCareer";
import WhyUs from "../comp/wyUs/whyUs";


const desc = [
  {
    title: "Our Vision",
    slug: "vision",
    desc: "To establish the excellence and reputation of Bangladesh in the smart labor market of the world through preparing the countries large educated population suitable for thecompetitive world in the IT sector.",
    list: [],
  },
  {
    title: "Our Mission",
    slug: "mission",
    desc: "",
    list: [
      "To conduct IT related training programs across the countrythrough online and offline medium at low cost.",
      "To avail necessary supports to the students to make themproficient in their specific subjects.",
      "To provide special supports and guidance for building abetter career at the end of the courses.",
      "To take special initiatives to popularize IT skills and careersin deprived and remote areas.",
      "To conduct appropriate activities to create skilled serviceproviders for the local and international labor markets, as wellas, successful entrepreneurs in the IT sector.",
    ],
  },
];

const page = () => {
  return (
    <div className="relative">
      <Image
        alt="home"
        src={about_us}
        width={1000}
        height={200}
        quality={95}
        className="w-full h-[240px] md:h-[453px] lg:h-[453px] uws:h-[700px]"
      />
      <div className="absolute  text-[35px] md:text-[60px] lg:text-[60px] regularBrush text-center w-full -mt-32 md:-mt-72 lg:-mt-72 text-white">
        <p className="">Who We Are</p>
      </div>
      <div className="absolute -mt-12 md:-mt-28 lg:-mt-28 w-full">
        <WhyUs />
      </div>
      <div className="pt-10">
        <FutureCareer />
      </div>

      <div className="-mt-16 md:-mt-9 lg:-mt-28 exl:-mt-24 uws:-mt-28 inter text-black w-5/6 md:w-4/6  mx-auto">
        <div className="text-center">
          {desc?.map((params, idx) => (
            <div key={params.slug}>
              <div className="  mb-12 ">
                <p className="text-[35px] md:text-[64px] lg:text-[64px] regularBrush text-[#5C5C5C] ">
                  {params.title}
                </p>
                <p className="text-[14px] uws:text-[30px] inter mt-2">
                  {params.desc}
                </p>

                <ul key={idx} className="ml-4 text-left list-disc space-y-2">
                  {params.list.length > 0
                    ? params.list.map((param, idx) => (
                        <li
                          key={idx}
                          className="inter text-[14px] uws:text-[30px]"
                        >
                          {param}
                        </li>
                      ))
                    : ""}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;