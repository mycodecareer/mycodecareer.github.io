import React from "react";

const SectionRow = ({ text, image, imageName, isReversed = false }) => {
  const baseClass =
    "flex flex-col-reverse justify-between items-center gap-4 mt-12 w-full sm:gap-8";

  const rowClass = " lg:flex-row lg:mt-24 lg:text";
  const rowReverseClass = "lg:flex-row lg:flex-row-reverse";

  var textArray = text.split("\n");

  return (
    <section
      className={
        isReversed
          ? `${baseClass}${rowReverseClass}`
          : `${baseClass}${rowClass}`
      }
    >
      <section className="w-full text-lg p-2 lg:w-1/2">
        {textArray.map((textElement) => {
          return (
            <>
              <p>{textElement}</p>
              <br />
            </>
          );
        })}
      </section>
      <section className="flex justify-center items-center lg:w-1/2">
        <img src={image} alt={imageName} className="w-full h-full rounded-md" />
      </section>
    </section>
  );
};

export default SectionRow;
