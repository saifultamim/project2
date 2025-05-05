import { cn } from '@/utils/tailwind-utils';
import React from 'react';

interface InputProps {
  type?: string; 
  placeholder?: string; 
  value?: string; 
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  name?: string; 
  id?: string; 
  className?: string; 
  required?:boolean

}

const Input = ({
  type = "text",
  placeholder = "",
  value = "",
  onChange = () => {},
  name = "",
  id = "",
  className = "",
  required = false,
...props
}: InputProps) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        required={required}
      className={cn(
          "rounded-md  outline-none focus:ring-1 focus:border-transparent focus:outline-none  px-4 py-2  bg-[#f3f5f5]/20  w-full  text-black  border border-gray-300",
          className
        )}
       {...props}
      />
    </div>
  );
};

export default Input;




