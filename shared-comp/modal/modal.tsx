


import React from 'react';
interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
    className:string
    onClick:any
  }

const Modal :  React.FC<ModalProps> = ({ onClose, children,className ,onClick}) => {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-lg  ${className}`}>
      {/* <h2 className="text-lg font-semibold mb-4">Add New Employee</h2> */}
      {/* <input type="text" placeholder="Name" className="border p-2 w-full mb-2" />
      <input type="text" placeholder="Role" className="border p-2 w-full mb-2" />
      <input type="email" placeholder="Email" className="border p-2 w-full mb-2" /> */}
      {children}<br/>
      <div className=" flex gap-4 mt-4">
        <button onClick={onClose} className="px-4 py-2 bg-slate-200  rounded-lg ">Cancel</button>
        <button onClick={()=>{onClose();onClick()}} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Save</button>
      </div>
    </div>
  );
};
 
export default Modal;