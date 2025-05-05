"use client";

import invoiceImage1 from "@/public/images/home/svg/manage-business.svg";
import invoiceImage2 from "@/public/images/home//svg/Invoice-bro.svg";
import invoiceImage3 from "@/public/images/home//svg/tranform-business.svg";
import invoiceImage4 from "@/public/images/home//svg/financial-management.svg";
import invoiceImage5 from "@/public/images/home//svg/time-management.svg";
import invoiceImage6 from "@/public/images/home//svg/business-finance.svg";
import invoiceImage7 from "@/public/images/home//svg/Payment-bro.svg";
import invoiceImage8 from "@/public/images/home//svg/Payment-bro.svg";
const itemList = [
  {
    id: 8,
    title: 'Run Your Business On the Go!',
    description: "Empower your business with mobile-first tools. Monitor performance, manage finances, and stay connected with your team—all in one app. With real-time data access and a secure platform, make informed decisions from anywhere and ensure seamless operations at all times.",
    image: invoiceImage8,
  }
  ,
  {
    id: 1,
    title: 'Manage Your Business Anywhere, Anytime!',
    description: "Manage your business anywhere with our platform. Access data, communicate, and monitor progress in real time. With a user-friendly interface and secure cloud tech, streamline processes, make decisions, and drive growth effortlessly on any device.",
    image: invoiceImage1,
  },
  {
    id: 2,
    title: "Create Invoices, Send Quotations, Track Payments – All in One Place.",
    description: "Create professional invoices, send accurate quotations, and track payments seamlessly on one platform. Simplify financial processes with an easy-to-use system, ensuring real-time payment tracking. Perfect for freelancers, small businesses, and enterprises to streamline workflows and focus on growth.",
    image: invoiceImage2,
  },
  {
    id: 3,
    title: "Transform Your Business Transactions with Precision and Speed",
    description: "Transform your business with precise, efficient transactions. Our advanced solutions streamline payments, invoicing, and operations, reducing errors and accelerating workflows. Empower your team to focus on growth and innovation with accurate, seamless financial processes.",
    image: invoiceImage3,
  },
  {
    id: 4,
    title: "Experience Seamless Financial Management Like Never Before.",
    description: "Manage your finances seamlessly with real-time tracking, easy budgeting, and efficient transactions. Perfect for individuals or businesses, our intuitive tools offer better insights, enhanced security, and smarter decisions. Take charge of your financial future today!",
    image: invoiceImage4,
  },
  {
    id: 5,
    title: "Stay Organized, Save Time, and Scale Faster with Olo Invoicer",
    description: "Olo Invoicer helps businesses stay organized, save time, and scale faster by automating invoicing, tracking payments, and managing financial records. Ideal for freelancers or companies, it reduces errors, ensures timely payments, and streamlines workflows.",
    image: invoiceImage5,
  },
  {
    id: 6,
    title: "Revolutionize Your Business Finances with Effortless Invoicing.",
    description: "Revolutionize your business finances with effortless invoicing. Simplify billing, track payments, and manage records. Generate accurate invoices quickly, saving time and reducing errors. Streamline workflows, enhance cash flow, and improve client relationships today!",
    image: invoiceImage6,
  },
  {
    id: 7,
    title: "Simplify Payments, Boost Cash Flow, and Stay Ahead of the Competition.",
    description: "Streamline payments, boost cash flow, reduce admin tasks, speed up transactions, and enhance customer satisfaction. Offer secure, modern payment solutions to drive growth, increase revenue, and deliver a hassle-free experience for strong competitive success.",
    image: invoiceImage7,
  },
];

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function HomeSlider() {
  const [items] = useState(itemList);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  }, [items.length]);

  const stopAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [startAutoSlide, stopAutoSlide]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  // Swipe functionality
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;

    const endX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - endX;

    const threshold = 50; // Minimum swipe distance in pixels
    if (diffX > threshold) {
      // Swipe left
      nextSlide();
    } else if (diffX < -threshold) {
      // Swipe right
      prevSlide();
    }

    touchStartX.current = null;
  };

  return (
    <header className=" mx-auto py-6 lg:py-12 relative border border-black">
      {/* Navigation Buttons */}
      <div className="absolute z-10 hidden lg:flex top-1/2 left-0 right-0 w-full justify-between transform -translate-y-1/2 px-4 lg:px-8">
        <button
          onClick={prevSlide}
          className="absolute z-10 left-[-50px] bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 focus:outline-none text-[#480082] text-xl lg:text-2xl"
        >
           <IoIosArrowBack />
       
        </button>
        <button
          onClick={nextSlide}
          className="absolute z-10 right-[-50px] bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 focus:outline-none text-[#480082] text-xl lg:text-2xl"
        >
          <IoIosArrowForward />
        </button>
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slider */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((params, idx) => (
            <div
              key={idx}
              className="min-w-full flex flex-col items-center lg:flex-row lg:items-center px-4 gap-4 sm:px-6 lg:px-8 space-y-4 lg:space-y-0"
            >
              <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-[#480082] mb-2 lg:mb-3">
                  {params.title}
                </h1>
                <p className="text-sm md:text-base text-gray-600 mb-4 lg:mb-6 text-justify">
                  {params.description}
                </p>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <Image
                  src={params.image}
                  alt="Slide Image"
                  width={1000}
                  height={350}
                  className="w-full  max-h-[350px] rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-4">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex
                  ? "bg-[#480082] scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              } transition-all duration-300`}
            />
          ))}
        </div>
      </div>
    </header>
  );
}



