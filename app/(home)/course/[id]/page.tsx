
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import courseBanner from "@/public/images/home/courses/course.png";
import ExpectationsOverview from "../../comp/course/expectationsOverview";
import LearningOutcome from "../../comp/course/learningOutcome";
import CourseFaq from "../../comp/course/courseFAQ";
import RelatedCourse from "../../comp/course/relateCourse";
import Button from "@/ui/reuseable_comp/Button";
import { courseDetails } from "@/utils/homeData";
import Link from "next/link";

export const revalidate = 20;


interface CourseDetailPageProps {
  params: { id: number };
}
const CourseDetailPage =  async({ params }: CourseDetailPageProps) => {
  let { id } = await  params;
  console.log('id problem ',id)


  const content = {
    // start_date: "2025-03-10",
    class_timing: "Monday & Friday, 6:00 PM - 8:00 PM",
    // doubt_session: "Every Saturday, 7:00 PM - 8:00 PM",
  };

  const course = courseDetails.find(course => course.xitemid === Number(id));

  return (
    <div className="mb-10 sm:mb-10 md:mb-20 lg:mb-0 exl:mb-16 uws:mb-28">
      <div className="relative bg-black ">
        <Image
          alt="course"
          src={courseBanner}
          width={1000}
          height={200}
          className="w-full h-[200px] xs:h-[300px] md:h-[453px] lg:h-[453px] exl:h-[470px] uws:h-[650px]"
        />

        <div className="w-11/12 mx-auto md:w-5/6 py-12">
          <div className="flex lg:flex-row exl:flex-row uws:flex-row md:flex-col sm:flex-col xs:flex-col gap-8 justify-center items-end -mt-36 lg:-mt-48">
            <div className="w-[250px] xs:w-full md:w-[300px] lg:w-[450px] lg:h-[600px] uws:w-[800px] uws:h-[970px] h-auto pb-8 border-b-4 border-red-600 mx-auto">
              <div className="bg-black border-2 border-white rounded-[18px] px-4 py-8">
                {course?.ximage ? (
                  <div className="h-auto  lg:h-[500px] uws:h-[850px] ">
                    <Image
                      alt="digital_marketing"
                      src={`${course?.ximage}`}
                      width={1000}
                      height={950}
                      className="object-contain w-full h-auto lg:h-[450px] uws:h-[750px] "
                    />
                  
                  <Link href={`${course?.xdesc.toLowerCase() == 'video editing' ? '/courses' : '/instruction'}`}>
                    <Button  className=" bg-red-600 mx-auto w-full mt-4 focus:outline-none focus:ring-0">
                      {course?.xdesc.toLowerCase() === 'video editing' ? 'Not Available' : ' Enroll Now'}
                    </Button>
                  </Link>
                  </div>
                ) : (
                  <Image
                    alt="digital_marketing"
                    src={`/images/courses/course/course.png`}
                    width={300}
                    height={950}
                    className="w-full h-auto lg:h-[500px] uws:h-[850px]"
                  />
                )}
              </div>
             
              
            </div>

            <div className="bg-red-600 text-white w-full md:w-full h-auto py-6 flex flex-col lg:flex-row justify-between items-end rounded-[18px]">
              <div className="w-full ">
                {/* <p className='bg-black px-4 py-2 w-fit montserat font-semibold text-[16px] md:text-[20px] rounded-tr-[12px] rounded-br-[12px] uws:text-[30px]'>course time</p> */}
                
                 <div className='bg-black px-4 py-2 w-fit montserat font-semibold  rounded-tr-[12px] rounded-br-[12px] uws:text-[30px] mb-2'>
                  <p className='text-[16px] md:text-[20px]'>course time</p>
                    {/* <p ><span className='text-red-600'>Start Date : </span>{ content.start_date}</p> */}
                    <p><span className='text-red-600'>Class time :</span> { content. class_timing}</p>
                    {/* <p><span className='text-red-600'>Session :</span> { content.doubt_session}</p> */}
                  </div>
               
                <p className="bg-black px-4 py-2 w-fit montserat font-semibold text-[16px] md:text-[20px] rounded-tr-[12px] rounded-br-[12px] uws:text-[30px]">
                  COURSE DETAILS
                </p>
              </div>
              <div className="text-left pr-4 mt-6 md:mt-4 lg:text-right lg:pr-12 w-full xs:pl-2 md:pl-4">
                <p className="jaro text-[32px] md:text-[50px] uws:text-[75px] xs:leading-[30px] md:leading-10 uws:leading-[60px]">
                  {course?.xdesc
                    ?.split(",")
                    .map((part: string, index: number) => (
                      <span key={index}>
                        {part}
                        {index < course.xdesc.split(",").length - 1 && <br />}
                      </span>
                    ))}
                </p>
                <p className="text-[20px] md:text-[26px] text-black uws:text-[36px]">
                  Mastery
                </p>
                <p>price : {course?.xprice}</p>
              </div>
            </div>
          </div>

          <div className="bg-white py-6 flex flex-col items-start rounded-[18px] mt-8">
            <div className="w-11/12 mx-auto">
              <div className="flex items-center gap-4">
                <p className="jaro text-[24px] md:text-[32px] uws:text-[60px]">
                  What to Expect
                </p>
                <h1 className="border-[1px] flex-grow border-black"></h1>
              </div>
              <div className="mt-4 text-black text-[14px] uws:text-[28px] montserat font-semibold">
                {course?.expectations && <ExpectationsOverview expectations={course?.expectations} />}
              </div>
            </div>
          </div>

          <div className="bg-white py-6 flex flex-col rounded-[18px] mt-8">
            {course?.learningOutCome && <LearningOutcome learningOutCome={course?.learningOutCome} />}
          </div>

          <div className="bg-white py-8 rounded-[18px] mt-8">
            <div className="w-11/12 mx-auto">
              <p className="jaro text-[24px] md:text-[32px] text-red-600 uws:text-[60px]">
                FREQUENTLY ASKED QUESTIONS
              </p>{" "}
              {course?.courseFAQ && <CourseFaq  courseFAQ={course?.courseFAQ} />}
            </div>
          </div>
        </div>
      </div>

      <Suspense
        fallback={
          <div className="text-red-600 py-8">Loading other courses...</div>
        }
      >
        <RelatedCourse />
      </Suspense>
    </div>
  );
};

export default CourseDetailPage;
