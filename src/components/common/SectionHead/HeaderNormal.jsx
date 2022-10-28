const HeaderNormal = ({ text }) => {
  return (
    <section className="mb-12 bg-accent flex justify-center items-center w-full h-32 -skew-y-12 md:h-48">
      <h2 className="text-5xl skew-y-12"> {text} </h2>
    </section>
  );
};

export default HeaderNormal;
