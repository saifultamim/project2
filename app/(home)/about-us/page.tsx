import React from "react";
import about_us from "@/public/images/home/about_us/about_us.png";
import Image from "next/image";
import FutureCareer from "../comp/futureCareer/futureCareer";
import WhyUs from "../comp/wyUs/whyUs";

const desc = [
  {
    title: "Our Vision",
    slug: "vision",
    desc: "To position Bangladesh as a leading nation in the global smart labor market by equipping its vast educated population with the skills needed to compete effectively in the IT sector.",
    list: [],
  },
  {
    title: "Our Mission",
    slug: "mission",
    desc: "",
    list: [
      " Organizing affordable IT training programs nationwide, accessible through both online and offline platforms.",
      "Providing essential academic support to help students gain expertise in their chosen fields.",
      "Offering dedicated career guidance and assistance to help learners build a strong professional future after completing their courses.",
      "Launching focused efforts to promote IT education and career awareness in disadvantaged and remote communities.",
      "Carrying out strategic initiatives to develop skilled professionals for both local and global job markets, while also encouraging entrepreneurship in the IT sector.",
    ],
  },
];

const page = () => {
  return (
    <div className="relative">
      {/* <Image
        alt="home"
        src={about_us}
        width={1000}
        height={200}
        quality={95}
        className="w-full h-[240px] md:h-[453px] lg:h-[453px] uws:h-[700px]"
      /> */}
      <div className="relative w-full h-[240px] md:h-[453px] lg:h-[453px] uws:h-[700px] -z-10 md:-mt-0 -mt-2">
  <Image
    alt="home"
    src={about_us}
    fill
    quality={95}
    className="object-cover"
  />
  <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />
</div>
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
