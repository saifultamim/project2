'use client'
import RegisterForm from '@/ui/registration/Registration';
import React, { useState } from 'react';
import { registration } from './server-action';

const page = () => {
    // const [registeredUser, setRegisteredUser] = useState(null);
    console.log('frontend res')
    const handleRegistration = async(data: any) => {
        console.log("Received Registration Data in page.tsx:", data);
        // setRegisteredUser(data); // Store the received data in state
        const res = await registration(data)
        console.log('fronteENd ',res)
      };
    return (
        <div>
            <RegisterForm onRegister={handleRegistration} />
        </div>
    );
};

export default page;