"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import Link from "next/link";
import mentors_header from "@/public/images/home/mentors/mentors.png";

const videos = [
  {
    id: 1,
    thumbnail: "/images/home/home2.png",
    url: "https://www.youtube.com/embed/hxMNYkLN7tI?si=rvZlNYXcKjtEumm7",
  },
  {
    id: 2,
    thumbnail: "/images/home/home2.png",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    thumbnail: "/images/home/home_gallery/home_gallery_2.png",
    url: "https://www.youtube.com/embed/kJQP7kiw5Fk",
  },
];

export default function SuccessStory() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSelectedVideo(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className=" h-screen">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-28">
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => {
              setIsOpen(true);
              setSelectedVideo(video.url);
            }}
            className="w-full md:w-4/6 mx-auto relative"
          >
            <div className="">
              <Image
                src={video.thumbnail}
                alt="Success Story Video"
                width={500}
                height={500}
                className="h-60 rounded-lg shadow-lg"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
              <svg
                className="w-16 h-16 text-gray-400 "
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 6v12l10-6z" />
              </svg>
            </div>
          </div>
        ))}
      </div> */}
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
        <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />
      </div>
      <div className="absolute  text-[35px] md:text-[60px] lg:text-[60px] regularBrush text-center w-full -mt-32 md:-mt-60 lg:-mt-72 text-white">
        <p className="">Success Story</p>
      </div>
      <div className="flex justify-center items-center mt-16 px-4">
        <Link
          href="/courses"
          className=" text-white bg-magenta  py-6 px-12 rounded-lg lg:text-2xl md:text-base text-xs shadow-gray-400 shadow-xl hover:bg-slate-200 hover:text-magenta transition-all font-newAcademy"
        >
          Join Our Courses & Start Your Success Story
        </Link>
      </div>

      {/* {isOpen && selectedVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 p-4">
          <div
            ref={modalRef}
            className="z-50 w-full md:w-4/6 lg:w-3/6 bg-white rounded-lg relative mt-28 exl:mt-16"
          >
            <button
              className="absolute top-2 right-0 text-red-600 bg-white font-bold px-3 py-1 rounded-full z-10"
              onClick={() => {
                setIsOpen(false);
                setSelectedVideo(null);
              }}
            >
              X
            </button>
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src={selectedVideo}
                title="Success Story Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
