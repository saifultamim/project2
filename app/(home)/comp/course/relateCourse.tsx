import { use } from "react";
import OtherCourseCarousel from "./otherCourseCarousel";
import { courses } from "@/utils/homeData";

type RelatedCourseProps = {
  fetchRelatedCourses: () => Promise<any>;
};

// const RelatedCourse = ({ fetchRelatedCourses }: RelatedCourseProps) => {
    const RelatedCourse = () => {
        // const courses = [
        //     {
        //       xdesc: "Full-Stack Web Development",
        //       ximage: "/images/courses/course/course.png",
        //       xitemcode: "FSWD101",
        //     },
        //     {
        //       xdesc: "Data Science and Machine Learning",
        //       ximage: "/images/courses/course/course.png",
        //       xitemcode: "DSML102",
        //     },
        //     {
        //       xdesc: "Cybersecurity and Ethical Hacking",
        //       ximage: "/images/courses/course/course.png",
        //       xitemcode: "CYSEC103",
        //     },
        //     {
        //       xdesc: "Cloud Computing and DevOps",
        //       ximage: "/images/courses/course/course.png",
        //       xitemcode: "CLOUD104",
        //     },
        //     {
        //       xdesc: "Artificial Intelligence and Deep Learning",
        //       ximage: "/images/courses/course/course.png",
        //       xitemcode: "AI105",
        //     },
        //     {
        //       xdesc: "Blockchain Development",
        //       ximage: "/images/courses/course/course.png",
        //       xitemcode: "BLOCK106",
        //     },
        //     {
        //       xdesc: "Mobile App Development",
        //       ximage: "/images/courses/course/course.png",
        //       xitemcode: "MOBDEV107",
        //     },
        //     {
        //       xdesc: "UI/UX Design Fundamentals",
        //       ximage: "/images/courses/course/course.png",
        //       xitemcode: "UIUX108",
        //     },
        //     {
        //       xdesc: "Software Testing and QA",
        //       ximage: "/images/courses/course/course.png",
        //       xitemcode: "QA109",
        //     },
        //     {
        //       xdesc: "Big Data Analytics",
        //       ximage: "/images/courses/course/course.png",
        //       xitemcode: "BIGDATA110",
        //     },
        //   ];
  return <OtherCourseCarousel courses={courses} />;
};
export default RelatedCourse;