import React from "react";

const HeaderReversed = ({ text }) => {
  return (
    <section className="my-8 bg-accent flex justify-center items-center w-full h-32 skew-y-12">
      <h2 className="text-5xl -skew-y-12"> {text} </h2>
    </section>
  );
};

export default HeaderReversed;
