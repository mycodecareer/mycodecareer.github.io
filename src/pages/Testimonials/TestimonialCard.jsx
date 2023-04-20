const TestimonialCard = ({ imageSrc, testimonialText, name, title }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          {/* <div className="w-full md:w-1/3"> */}
          <img src={imageSrc} alt={name} className="w-full object-cover" />
          <div className="bg-gray-100 p-4">
            <p className="font-bold">{name}</p>
            <p>{title}</p>
          </div>
        </div>
        <div className="p-4 flex-1">
          <p className="mb-4">{testimonialText}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
