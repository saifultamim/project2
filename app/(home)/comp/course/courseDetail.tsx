import Image from "next/image";
import { use } from "react";
import calendar from "@/public/images/courses/course/calendar.png";
import time from "@/public/images/courses/course/time.png";
import session from "@/public/images/courses/course/session.png";
interface CourseDetailProps {
  content: any;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ content }) => {
    const classDetail = content
//   const classDetail = JSON.parse(content?.class_details);
 console.log('++',classDetail)
  return (
    <div className="grid xs:pl-2 sm:pl-2 md:pl-4 lg:pl-4 exl:pl-4 uws:pl-4  gap-4">
      <div className="flex items-center gap-4">
        <Image
          alt="courseDetails"
          src={calendar}
          width={40}
          height={30}
          className="xs:w-9 xs:h-9    w-12 h-12"
        />
        <p className="montserat text-[12px] md:text-[14px] uws:text-[36px] font-semibold">
          Start Date: <br />
          {classDetail?.start_date}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Image
          alt="courseDetails"
          src={time}
          width={40}
          height={30}
          className="xs:w-9 xs:h-9    w-12 h-12"
        />
        <p className="montserat text-[12px] md:text-[14px] uws:text-[36px] font-semibold">
          Class Timings:
          <br />
          {classDetail?.class_timing}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Image
          alt="courseDetails"
          src={session}
          width={40}
          height={30}
          className="xs:w-9 xs:h-9    w-12 h-12"
        />
        <p className="montserat text-[12px] md:text-[14px] uws:text-[36px] font-semibold">
          Doubt Session: <br />
          {classDetail?.doubt_session}
        </p>
      </div>
      <button className="bg-black text-white   w-[180px] md:w-[262px] py-2 text-[16px] md:text-[20px] rounded-[6px]  uws:text-[36px] xs:mt-2  mt-6">
        Enroll now
      </button>
    </div>
  );
};

export default CourseDetail;