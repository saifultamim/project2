import Image from "next/image";
import Link from "next/link";
import "./style.css";
import Menu from "./components/menu";
import MobileMenu from "./components/mobileMenu";
import { courses } from "@/utils/homeData";


export const revalidate = 30;

const Navbar = async () => {
  // const courses =  [
  //   { name: "Full-Stack Web Development" },
  //   { name: "Data Science and Machine Learning" },
  //   { name: "Cybersecurity and Ethical Hacking" },
  //   { name: "Cloud Computing and DevOps" },
  //   { name: "Artificial Intelligence and Deep Learning" },
  //   { name: "Blockchain Development" },
  // ];

  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 lg:px-12 py-4 jaro">
      {/* Logo Section */}
      <Link href="/" className='font-newAcademy md:text-3xl text-xl text-white'>
        {/* <Image
          alt="logo"
          src="/images/logo/app-logo.png"
          width={169}
          height={42}
          quality={95}
        /> */}
     CodeCamp IT
      </Link>

      {/* Desktop Menu */}
      <Menu courses={courses} />

      {/* Mobile Menu */}
      <MobileMenu courses={courses} />
    </nav>
  );
};

export default Navbar;