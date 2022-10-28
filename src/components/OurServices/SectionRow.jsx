import React from "react";

const SectionRow = ({ text, image, imageName, isReversed = false }) => {
  const classBase =
    "flex flex-col-reverse justify-between items-center flex-wrap gap-4 mt-12 w-full sm:gap-8";

  const rowClass = " lg:flex-row lg:mt-24 lg:text";
  const rowReverseClass = " md:flex-row lg:flex-row-reverse";

  return (
    <section
      className={
        isReversed
          ? `${classBase}${rowReverseClass}`
          : `${classBase}${rowClass}`
      }
    >
      <section className="w-full text-lg p-2 lg:w-1/2">{text}</section>
      <section className="flex justify-center items-center lg:flex-1">
        <img src={image} alt={imageName} className="w-full h-full rounded-md" />
      </section>
    </section>
  );
};

export default SectionRow;
