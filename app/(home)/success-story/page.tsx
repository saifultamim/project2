'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import Link from 'next/link';

const videos = [
  { id: 1, thumbnail: "/images/home/home2.png", url: "https://www.youtube.com/embed/hxMNYkLN7tI?si=rvZlNYXcKjtEumm7" },
  { id: 2, thumbnail: "/images/home/home2.png", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 3, thumbnail: "/images/home/home_gallery/home_gallery_2.png", url: "https://www.youtube.com/embed/kJQP7kiw5Fk" }
];

export default function SuccessStory() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectedVideo(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className=" ">
      {/* <h1 className="text-white text-2xl">Our Success Stories</h1> */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-28">
        {videos.map((video) => (
          <div key={video.id}  onClick={() => { setIsOpen(true); setSelectedVideo(video.url); }} className='w-full md:w-4/6 mx-auto relative'>
          <div className=''>
          <Image 
              src={video.thumbnail} 
              alt="Success Story Video"
              width={500} 
              height={500} 
              className="h-60 rounded-lg shadow-lg"
            />
            </div>
            {/* <div className="absolute inset-0 flex items-center justify-center bg-red-600 bg-opacity-50 rounded-lg">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 6v12l10-6z" />
              </svg>
            </div> */}
            <div className='absolute inset-0 flex items-center justify-center cursor-pointer'>
            <svg className="w-16 h-16 text-gray-400 " fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 6v12l10-6z" />
              </svg>
              {/* <SiGoogledisplayandvideo360 className="w-10 h-10 text-red-600 font-bold" /> */}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
          <Link
            href="/courses"
            className=" text-red-600  font-semibold py-3 px-6 rounded-lg lg:text-xl md:text-base text-xs shadow-gray-400 shadow-xl hover:bg-violet-500 hover:text-white transition-all montserat"
          >
            Join Our Courses & Start Your Success Story
          </Link>
        </div>
      {/* {isOpen && selectedVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-300">
          <div ref={modalRef} className="w-full max-w-3xl relative ">
            <button className="absolute top-2 right-2 text-white bg-red-500 px-3 py-1 rounded-full z-10" onClick={() => { setIsOpen(false); setSelectedVideo(null); }}>X</button>
            <div className="relative border-2 border-blue-600  h-0 pb-[56.25%]">
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
      {isOpen && selectedVideo && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 p-4">
    <div ref={modalRef} className="z-50 w-full md:w-4/6 lg:w-3/6 bg-white rounded-lg relative mt-28 exl:mt-16">
      <button 
        className="absolute top-2 right-0 text-red-600 bg-white font-bold px-3 py-1 rounded-full z-10"
        onClick={() => { setIsOpen(false); setSelectedVideo(null); }}
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
)}

    </div>
  );
}
