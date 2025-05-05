
"use client";

export const localstorageGetData = ({params}:{params:string}) => {
  const data = localStorage.getItem(params) || null; 
  return data;
};


export const localstorageSetData = ({params}:{params:string}) => {
  const data = localStorage.setItem(params,'this is set item'); 
  return data;
};

export const localstorageRemoveData = ({params}:{params:string}) => {
  const data =  localStorage.removeItem(params)
  return data;
};


export const localstorageClearALlData = () => {
  const data =  localStorage.clear()
  console.log('clear ',data)
  return data;
};

