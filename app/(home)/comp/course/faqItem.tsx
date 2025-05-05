"use client";

import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-[#D9D9D9]">
      <div
        className="flex gap-4 items-center justify-between py-2 bg-[#D9D9D9] rounded-[7px] mt-4 px-3"
        onClick={handleToggle}
      >
        <div className="flex gap-4 items-center rounded-[7px] px-3">
          <p className="montserat xs:text-[12px] lg:text-[16px] uws:text-[32px]">
            {question}
          </p>
        </div>
        <button>
          {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
      </div>
      {isOpen && (
        <p className="p-4 xs:text-[12px] lg:text-[16px] uws:text-[20px] ml-3">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQItem;