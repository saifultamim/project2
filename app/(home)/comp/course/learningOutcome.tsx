import React from "react";
import { IoCheckmark } from "react-icons/io5";
interface LearningDetail {
  details: string | React.ReactNode
}

interface LearningOutComeProps {
  learningOutCome: {
    whatYouLearn: LearningDetail[];
    requirements: LearningDetail[];
  };
}

const LearningOutcome: React.FC<LearningOutComeProps> = ({learningOutCome}) => {

  return (
    <>
      <div className="w-11/12 mx-auto">
        <p className="jaro text-[24px] md:text-[32px] uws:text-[60px]">
          WHAT YOU’LL LEARN
        </p>
        {learningOutCome?.whatYouLearn?.map(
          (learningTopic, idx: number) => (
            <div key={idx} className="flex  gap-4 uws:text-[28px] mt-2  ">
            {    typeof(learningTopic?.details) == 'object' ||
                <div className="bg-red-600 w-4 h-4 uws:w-8 uws:h-8 text-white rounded-full flex items-center justify-center">
              <IoCheckmark />
              </div>
            }
              <p>{learningTopic?.details}</p>
            </div>
          )
        )}
        <p className="jaro text-[24px] md:text-[32px] mt-8 uws:text-[60px]">
          REQUIREMENTS
        </p>
        {learningOutCome?.requirements?.map(
          (feature, idx: number) => (
            <div key={idx} className="flex items-center gap-4 uws:text-[28px] mt-2  ">
              <div className="bg-red-600 w-4 h-4 uws:w-8 uws:h-8 text-white rounded-full flex items-center justify-center">
                <IoCheckmark />
              </div>
              <p>{feature?.details}</p>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default LearningOutcome;