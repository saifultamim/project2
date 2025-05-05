import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const HeroHeader = () => {
  return (
    <section className="relative w-full  flex items-center justify-center  py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl lg:text-4xl font-bold leading-tight">
            Let's Start the Journey for <span className="text-blue-500">Leadership</span> of the World
          </h1>
          <p className="mt-4 text-lg ">
            Take the first step towards excellence. Embrace the challenge, innovate, and lead with vision.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-all text-white font-semibold rounded-lg flex items-center gap-2">
            Get Started 
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <Image 
            src='/images/home/hero.jpeg' 
            alt='Hero Image' 
            width={500} 
            height={500} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroHeader;
