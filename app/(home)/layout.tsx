

import Footer from '@/shared-comp/footer/footer';
import Navbar from '@/shared-comp/navbar/Navbar';
import React from 'react';


const layout = ({children}:{children:React.ReactNode}) => {
    return (
        <div>
         <Navbar></Navbar>
           {/* <div className=' mx-auto mt-24 mb-24 w-10/12 '> */}
           <div className=' mx-auto mt-16 mb-24 '>
            {children}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default layout;