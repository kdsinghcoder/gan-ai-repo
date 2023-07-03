import React from 'react';

function SectionDivider({heading,line}) {
  return (
    <div className="flex justify-center items-center h-[30px] my-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{heading}</h2>
        <p className="text-lg text-gray-600">{line}</p>
      </div>
    </div>
  );
}

export default SectionDivider;
