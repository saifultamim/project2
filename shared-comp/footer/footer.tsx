import Image from "next/image";
import React from "react";
import facebook from "@/public/images/footer/facebook.png";
import linkedin from "@/public/images/footer/linkedin.png";
import youtube from "@/public/images/footer/youtube.png";
import Link from "next/link";
const images1 = [{ img: facebook }, { img: linkedin }, { img: youtube }];

const Footer = () => {
  return (
    <div className=" w-full  uws:py-5 bg-black ">
      <div className=" text-white  xs:w-6/6 sm:w-5/6 md:w-5/6 lg:w-5/6  h-auto lg:h-[288px] uws:h-[340px] bg-black grid    md:grid-cols-2 lg:grid-cols-3 mx-auto xs:px-3 px-4 lg:px-0 pt-8 pb-8 lg:pt-0 lg:pb-0 uws:pb-8  items-center">
        <div className="">
          {/* <Image
            alt="logo"
            src={logo}
            height={63}
            width={169}
            className="uws:w-96"
          /> */}
        <span className='text-xl font-newAcademy text-magenta'>CodeCamp IT</span>
          <p className="w-[306px]  leading-[16.9px] uws:leading-[24px] text-[14px] uws:text-[24px] inter mt-2">
           At<span className='font-newAcademy text-lg m-3 text-magenta'>CodeCamp IT</span>, we emphasize practical, hands-on learning, with expert mentors who provide real-world perspectives in each lesson.
          </p>
          <div className="flex mt-5 gap-4">
            {images1.map((params, idx) => (
              <div key={idx}>
                <Link href="#">
                  <Image
                    alt="logo"
                    src={params.img}
                    height={30}
                    width={30}
                    className="uws:w-12"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col  montserat font-normal  mt-3 md:mt-0 lg:mt-0 xs:text-[13px] sm:text-[13px] md:text-[16px] lg:text-[16px] exl:text-[16px] leading-[22.08px]  uws:text-[28px] uws:leading-[40px] gap-2">
          <p className="montserat font-bold text-[20px] uws:text-[35px] text-red-600 leading-[27.6px]">
            LINKS
          </p>

          <Link href="/courses" className="  hover:underline">
            COURSES
          </Link>
          <Link href="/news-letter" className=" hover:underline">
            NEWSLETTER
          </Link>
          <Link href="/about-us" className=" hover:underline">
            ABOUT US
          </Link>
          <Link href="/career" className="  hover:underline">
            CAREER
          </Link>
          <Link href="/mentors" className=" hover:underline">
            MENTORS
          </Link>
        </div>

        <div className="  flex flex-col lg:items-end mt-4 lg:mt-0">
          <div className="lg:text-right montserat font-normal uws:text-[24px]">
            <p className="">info@mentorsitacademy</p>
            <p className="">
              2 Shahid Tazuddin Ahmed Sarani Razzak Plaza (2nd Floor).
              <br />
              Moghbazar, Dhaka
            </p>
            <div className="flex md:justify-end gap-3 mt-2">
              <p>Hotline:</p>
              <div>
                01711-671230 <br />
                01711-671231
              </div>
            </div>
            {/* <p className="montserat font-bold mt-3">OUR PARTNERS</p> */}
          </div>
          {/* <div className="flex bg-white md:w-[448px] lg:w-[410px] uws:w-[550px] h-[47px] uws:h-[60px] items-center rounded-[10px] justify-around">
            {images2.map((params, idx) => (
              <div key={idx} className="">
                <Image
                  alt="logo"
                  src={params.img}
                  height={20}
                  width={63}
                  className="uws:w-[100px]"
                />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;