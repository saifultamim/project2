"use client";

import React, {  useState } from "react";
import Link from "next/link";
import Image from "next/image";
import login from "@/public/images/home/login.png";

import Input from "../reuseable_comp/Input";
import Greetings from "../registration/Greetings";



const Login = () => {
  // State to manage all form fields
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
  };

  // Configuration for each input field
  const inputFields = [
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
      type: "password",
      placeholder: "Enter your password",
      name: "password",
      id: "password",
      value: formData.password,
      label: "Password",
      required: true, // Make this field required
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center  bg-gray-100 bg-opacity-90 px-3 py-5 md:py-16">
      <main className="md:flex bg-violet-300 border border-gray-200 shadow-xl drop-shadow-md rounded-lg">
        <div
          className="hidden md:flex md:w-1/2 items-center justify-center bg-cover relative"
          style={{ backgroundImage: "url()" }}
        >
          <Image src={login} alt="Login Image" width={700} height={700} />
        </div>

        <div className="flex flex-col justify-center w-full md:w-1/2 px-10 md:px-20 bg-white rounded-lg md:rounded-r-lg md:rounded-l-sm ">
          <div className="mb-8">
            <Greetings isName={false} />
          </div>
          <p className="text-center text-2xl text-gray-800 font-semibold mb-6">
            <span className="text-violet-600">Login</span> To Your Account
          </p>

      
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
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

            <button type='submit' className='bg-violet-600 py-2 text-white rounded-md'>
             Login
            </button>
          </form>
          <div className="flex justify-end mt-2">
            <a
              className="hover:underline text-violet-600"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="text-center mt-8 py-4">
            <h4 className="text-gray-700">
              Don&apos;t have an account ?
              <Link
                href="#"
                className="text-violet-600 hover:underline ml-1"
              >
                Sign Up
              </Link>
            </h4>
          </div>
          <div className="text-center pb-2">
            <Link href="/" className="text-violet-600 hover:underline">
              Back To Home
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Login;
