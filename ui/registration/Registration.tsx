"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import registration from '@/public/images/home/registration.png'
import Greetings from "./Greetings";
import Input from "../reuseable_comp/Input";


const RegisterForm = ({ onRegister }: { onRegister: (data: any) => void }) => {

    // State to manage all form fields
    const [formData, setFormData] = useState({
      name: "",
      password: "",
      email: "",
      phone:"",
    });
  
    // Handle input changes for all fields
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value, // Dynamically update the field based on the input's `name`
      }));
    };
  
    // Handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log("Form Data:", formData); // Log the form data
      // Add your form submission logic here
      onRegister(formData);
    };
  

  
  const inputFields = [
    {
      type: "text",
      placeholder: "Enter your name",
      name: "name",
      id: "name",
      value: formData.name,
      label: "Name",
      required: true, // Make this field required
    },
    {
      type: "email",
      placeholder: "Enter your email",
      name: "email",
      id: "email",
      value: formData.email,
      label: "Email",
      required: true, // Make this field required
    },
    {
      type: "text",
      placeholder: "Enter your phone",
      name: "phone",
      id: "phone",
      value: formData.phone,
      label: "Phone",
      required: true, // Make this field required
    },
    {
      type: "password",
      placeholder: "Enter your password",
      name: "password",
      id: "password",
      value: formData.password,
      label: "Password",
      required: true, // Make this field required
    },
    // {
    //   type: "password",
    //   placeholder: "Confirm Password",
    //   name: "confirmPassword",
    //   id: "confirmPassword",
    //   value: formData.password,
    //   label: "Confirm Password",
    //   required: true, // Make this field required
    // },
   
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center  bg-gray-100 bg-opacity-90 px-3 py-5 md:py-16">
      <main className="md:flex bg-violet-300 shadow-xl drop-shadow-md rounded-lg  md:w-10/12">
        <div className="flex flex-col justify-center   px-5 md:px-10 bg-white rounded-l-lg shadow-lg  py-10 w-full lg:w-1/2">
          <div className="mb-2 mx-auto">
            <Greetings isName={false} />
          </div>
          <p className="text-center text-2xl text-black font-semibold mb-6">
            <span className="text-violet-700">Register</span> Your Account
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-1 w-full">
     
     {inputFields.map((field,idx) => (
       <div key={idx} className='mt-2'>
         <label>{field.label}</label>
         <Input
           type={field.type}
           placeholder={field.placeholder}
           value={field.value}
           onChange={handleInputChange}
           name={field.name}
           id={field.id}
           className="bg-gray-100 border-none"
           required={field.required}
          />
       
       </div>
     ))}
     <button
       type="submit"
       className="w-full bg-violet-600 text-white py-2 px-4 rounded-md hover:bg-blue-800 mt-3"
     >
       Register / Sign Up
     </button>
   </form>
          <div className="text-center mt-8">
            <h4 className="text-gray-700">
              Already have an account?{" "}
              <Link href="/login" className="text-violet-700 hover:underline">
                Login
              </Link>
            </h4>
          </div>
          <div className='text-center py-2'>
            <Link
              href='/'
              className='text-violet-600 hover:underline'
            >
              Back To Home
            </Link>
          </div>
        </div>

        <div
          className="hidden  md:flex  items-center justify-center bg-cover lg:relative  lg:w-1/2"
          // style={{ backgroundImage: "url()" }}
        >
          <Image
            src={registration }
            alt="Login Image"
            width={700}
            height={700}
            className=''
          />
        </div>
      </main>
    </section>
  );
};

export default RegisterForm;
