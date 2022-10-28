import React from "react";

const BulletPoint = ({ image, text }) => {
  return (
    <div className="flex justify-start items-center gap-2 md:gap-4">
      <div className="text-2xl md:text-lg"> {image} </div>
      <div className="md:text-xl"> {text} </div>
    </div>
  );
};

export default BulletPoint;
