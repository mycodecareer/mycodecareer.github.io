const HeaderNormal = ({ text }) => {
  return (
    <section className="mb-12 bg-accent flex justify-center items-center w-full h-24 p-8 -skew-y-12 md:h-36">
      <h2 className="text-4xl skew-y-12"> {text} </h2>
    </section>
  );
};

export default HeaderNormal;
