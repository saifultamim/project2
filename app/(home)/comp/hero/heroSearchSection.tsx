import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import noImage from '@/public/images/home/courses/digital_marketing1.png'

interface Course {
  xitemcode: string;
  xdesc: string;
  ximage: string | StaticImageData;
}

const NoResultsFound = () => {
  return (
    <div className="p-8 text-center">
      <div className="text-gray-400 mb-2">
        <IoSearch className="w-12 h-12 mx-auto" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        No courses found
      </h3>
      <p className="text-sm text-gray-500">
        Try adjusting your search terms or browse all courses
      </p>
    </div>
  );
};

const SearchBar = ({ onSearch }: { onSearch: (e: any) => void }) => {
  return (
    <div className="flex w-full">
      <input
        type="search"
        placeholder="Find Courses Just the Way you like"
        className="p-2 rounded h-[52px] md:h-[57px] lg:h-[58px] px-4 placeholder:text-[12px] md:placeholder:text-[16px] lg:placeholder:text-[17px] placeholder:montserrat placeholder:text-gray-400 text-black w-full pr-12 "
        onChange={onSearch}
      />
      <IoSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black w-[20px] md:w-[24px] lg:w-[30px] h-[30px] " />
    </div>
  );
};
SearchBar.displayName = "SearchBar";

const SearchResults = ({ filteredCourses }: { filteredCourses: Course[] }) => {
  return (
    <div className="divide-y divide-gray-100">
      {filteredCourses.map((course,idx) => (
        <Link href={`#`} className="block" key={idx}>
          <div className="hover:bg-gray-50 transition p-4 flex flex-col md:flex-row md:items-center md:justify-between group space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-20 md:w-16  md:h-16 relative overflow-hidden rounded-lg">
               {course?.ximage ? 
                  <Image
                  src={noImage}
                  alt={course?.xdesc}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                :
                (
                  <Image
                  src={noImage}
                  alt='no image'
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                )
               }
              </div>
              <div className="flex-1">
                <h3 className="text-xs md:text-base font-medium text-gray-800 group-hover:text-red-500 transition-colors">
                  {course?.xdesc}
                </h3>
              </div>
            </div>
            <button className="text-xs md:text-sm text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg shadow-sm transition-colors duration-200">
              View
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};
SearchResults.displayName = "SearchResults";

const SearchSection = ({
  searchTerm,
  filteredCourses,
  onSearch,
}: {
  searchTerm: string;
  filteredCourses: Course[];
  onSearch: (e: any) => void;
}) => {
  return (
    <div className=" relative p-4  z-10  w-5/6 lg:w-3/3 exl:w-2/3 mt-2 sm:mt-4 md:mt-0  lg:mt-2 md:h-[220px] lg:h-[240px] exl:h-[280px] uws:h-[300px] mx-auto text-center">
      <p className="kickstart-text regularBrush font-medium text-[24px] md:text-[32px] lg:text-[50px] exl:text-[64px]">
        Kick start your future
      </p>
      <p className="xs:text-xs md:text-sm mb-4  montserrat">
        Pursue your passion and get a real-world education in Trendy Skillset
        <br />
        in any of our 30+ Short Course & Mastery programs.
      </p>

      <div className="relative flex w-full">
        <SearchBar onSearch={onSearch} />
        {searchTerm && (
          <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg z-20 max-h-[300px] overflow-y-auto">
            {filteredCourses.length > 0 ? (
              <SearchResults filteredCourses={filteredCourses} />
            ) : (
              <NoResultsFound />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchSection;