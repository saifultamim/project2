import React from 'react';

const Skeleton = ({  className = '' }) => {
  return (
    <div
    className={`relative  bg-gray-300  overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
    </div>
  );
};


export default Skeleton;