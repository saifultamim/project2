// // app/(your-folder)/enroll-instructions/page.tsx
// import React from "react";

// const EnrollInstructionsPage = () => {
//   return (
//     <div className="max-w-4xl mx-auto px-6 py-12 text-black">
//       <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-red-600">
//         How to Enroll in a Course
//       </h1>

//       <p className="text-lg mb-6">
//         Thank you for your interest in our IT training programs. We currently
//         do not support online payments. Please follow the instructions below to
//         secure your spot in any course:
//       </p>

//       <ol className="list-decimal pl-6 space-y-4 text-lg">
//         <li>
//           <strong>Step 1:</strong> Choose the course you are interested in from
//           our <a href="/courses" className="text-red-600 underline">Course Catalog</a>.
//         </li>
//         <li>
//           <strong>Step 2:</strong> Contact us via:
//           <ul className="list-disc pl-6 mt-2">
//             <li>
//               📞 <strong>Phone:</strong> <a href="tel:+8801234567890" className="text-red-600">+880 1234-567890</a>
//             </li>
//             <li>
//               💬 <strong>WhatsApp:</strong>{" "}
//               <a
//                 href="https://wa.me/8801234567890"
//                 className="text-red-600"
//                 target="_blank"
//               >
//                 Chat on WhatsApp
//               </a>
//             </li>
//             <li>
//               📧 <strong>Email:</strong>{" "}
//               <a href="mailto:info@youritcenter.com" className="text-red-600">
//                 info@youritcenter.com
//               </a>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <strong>Step 3:</strong> Provide us with:
//           <ul className="list-disc pl-6 mt-2">
//             <li>Your full name</li>
//             <li>Course name</li>
//             <li>Your contact number & email</li>
//             <li>Preferred class time</li>
//           </ul>
//         </li>
//         <li>
//           <strong>Step 4:</strong> We will confirm your registration via phone or WhatsApp.
//         </li>
//         <li>
//           <strong>Step 5:</strong> Visit our training center to complete the enrollment and make payment in person.
//         </li>
//       </ol>

//       <div className="mt-10 p-6 bg-gray-100 rounded-xl shadow">
//         <h2 className="text-xl font-semibold mb-2 text-red-600">Visit Us</h2>
//         <p>
//           📍 <strong>Address:</strong> House #123, Road #4, Dhanmondi, Dhaka
//         </p>
//         <p>
//           🕒 <strong>Office Hours:</strong> 10:00 AM - 6:00 PM (Saturday to Thursday)
//         </p>
//       </div>
//     </div>
//   );
// };

// export default EnrollInstructionsPage;
// app/(your-folder)/enroll-instructions/page.tsx

import Link from "next/link";
import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebookMessenger } from "react-icons/fa6";

const EnrollInstructionsBangla = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-black">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-red-600">
         যেভাবে কোর্সে ভর্তি হবেন
      </h1>

      <p className="text-lg mb-6">
        কোর্সে ভর্তি হতে নিচের ধাপগুলো অনুসরণ করুন : 
      </p>

      <ol className=" pl-6 space-y-4 text-lg">
        <li>
         <span className="font-semibold">ধাপ ১: </span>আমাদের দেওয়া <span className="text-red-600 font-semibold">WhatsApp/Facebook</span> লিংকে প্রবেশ করুন এবং
          আপনি কোন কোর্সটি নিতে চান সেটি আমাদের মেসেজ করুন।
        </li>
        <p className='text-red-600 font-semibold flex items-center gap-2'> <RiWhatsappFill  className="text-[#25D366]"/> whatsapp Link : <Link href="#" className='hover:underline'>Lorem ipsum dolor sit amet consectetur adipisicing </Link></p>
        <p className='text-red-600 font-semibold flex items-center gap-2'><FaFacebookMessenger className="text-[#0084FF]"/> facebook Link : <Link href="#" className='hover:underline'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit?</Link></p>
        <li>
          <span className="font-semibold">ধাপ ২: </span>আপনি কোন নম্বর থেকে বিকাশ করবেন সেটিও আমাদের মেসেজ করুন।
        </li>
        <li>
        <span className="font-semibold">ধাপ ৩: </span>নিচের বিকাশ নাম্বারে কোর্স ফি পাঠান:
          <br />
          <span className="text-red-600 font-semibold">📱 01XXXXXXXXX (bKash Personal)</span>
        </li>
        <li>
         <span className="font-semibold">ধাপ ৪: </span>বিকাশ থেকে আপনি একটি মেসেজ পাবেন যেখানে একটি <strong>Transaction ID</strong> থাকবে।
          সেই Transaction ID টি কপি করে আপনার বিকাশ নম্বরটি হোয়াটসঅ্যাপ অথবা মেসেঞ্জারে যেখানে আপনি মেসেজ করেছেন, সেখানে আমাদের মেসেজ করুন অথবা স্ক্রিনশট নিয়ে আমাদের কাছে পাঠান।
        </li>
        <li>
          <span className="font-semibold">ধাপ ৫: </span>এরপর কিছু সময় অপেক্ষা করুন। আমাদের টিম খুব দ্রুত আপনার সাথে যোগাযোগ করবে এবং ভর্তি নিশ্চিত করবে।
        </li>
      </ol>

      <div className="mt-10 p-6 bg-gray-100 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2 text-red-600">যোগাযোগের তথ্য</h2>
        <p>📞 মোবাইল: <Link href="tel:+8801234567890" className="text-red-600">+880 1234-567890</Link></p>
       
        <p>📧 ইমেইল: <Link href="mailto:info@youritcenter.com" className="text-red-600">info@youritcenter.com</Link></p>
      </div>
    </div>
  );
};

export default EnrollInstructionsBangla;
