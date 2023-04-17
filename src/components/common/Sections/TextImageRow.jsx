import React from "react";

// The TextImageRow component represents a multiline text box and an image in a
// row. The optional boolean parameter determines whether the order of the text
// and image are reversed in the resulting TextImageRow component.
const TextImageRow = ({ text, image, imageName, isReversed = false }) => {
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
            <div key={textElement}>
              <p>{textElement}</p>
              <br />
            </div>
          );
        })}
      </section>
      <section className="flex justify-center items-center lg:w-1/2">
        <img src={image} alt={imageName} className="w-full h-full rounded-md" />
      </section>
    </section>
  );
};

export default TextImageRow;
