import React from "react";
import home_gallery_1 from "@/public/images/home/home_gallery/home_gallery_5.jpeg";
import home_gallery_2 from "@/public/images/home/home_gallery/home_gallery_6.jpeg";
import home_gallery_3 from "@/public/images/home/home_gallery/home_gallery_7.jpeg";
import home_gallery_4 from "@/public/images/home/home_gallery/home_gallery_8.jpeg";
import Image from "next/image";
const gallery = [
  { id: 1, img: home_gallery_1 },
  { id: 2, img: home_gallery_2 },
  { id: 3, img: home_gallery_3 },
  { id: 4, img: home_gallery_4 },
];
const Gallery = ({ bool = true }) => {
  return (
    <div
      className={`grid justify-center  ${bool ? "" : "mb-16"} ${
        bool ? "" : ""
      }`}
    >
      <div
        className={`grid ${
          bool ? "grid-cols-4 " : "grid-cols-2  gap-3 md:gap-16 lg:gap-16"
        } justify-center rounded-lg`}
      >
        {gallery.map((params, idx) => (
          <div key={idx}>
            <Image
              alt="gallery"
              src={params.img}
              height={418}
              width={360}
              className={`${
                bool
                  ? "w-full h-full object-cover exl:w-[450px] uws:w-[750px]"
                  : " w-[250px] px-1 md:w-[493px] lg:w-[493px] uws:w-[900px] md:h-[400px] md:px-4 lg:h-[573px] uws:h-[900px]"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;