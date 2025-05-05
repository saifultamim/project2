import Image from "next/image";
import React from "react";

const FutureCareer = () => {
  return (
    // <div className=" mt-12 mb-24   md:mt-36 lg:mt-32 lg:mb-44   uws:mt-72 w-5/6 lg:w-[986px] uws:w-[1500px]  mx-auto text-center border border-black">
    <div className=" mt-16 mb-24   md:mt-36 lg:mt-32 lg:mb-44   uws:mt-96 w-5/6 md:w-4/6   mx-auto text-center">
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
            Your mate for Your
          </p>
          <p className="text-[35px] md:text-[64px] lg:text-[64px] regularBrush text-[#5C5C5C] ">
            Future Career
          </p>
        </div>
        <div className="text-[14px] uws:text-[30px]  inter mt-4">
          <p>
            MentorsIT is a forward-thinking edtech company dedicated to
            empowering individuals through digital skills development. We offer
            a wide range of practical courses, including Digital Marketing,
            Graphics Design, and other in-demand disciplines. Our programs are
            crafted to meet the needs of aspiring professionals and
            career-driven learners, equipping them with industry-relevant skills
            to excel in the digital world.
          </p>
          <br />
          <p>
            At MentorsIT, we prioritize hands-on learning, guided by experienced
            mentors who bring real-world insights into every class. Our mission
            is to transform learners into skilled professionals by providing a
            supportive and engaging environment where they can thrive. Whether
            in virtual classrooms or interactive sessions, we ensure that each
            course blends foundational knowledge with practical applications,
            preparing students for successful careers in a rapidly evolving
            digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FutureCareer;