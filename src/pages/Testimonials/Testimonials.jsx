import TestimonialCard from "./TestimonialCard";
import testimonialData from "./testimonialdata.json";

const Testimonials = () => {
  return (
    <section className="container mx-auto px-4 py-8 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {testimonialData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            imageSrc={testimonial.imageSrc}
            testimonialText={testimonial.testimonialText}
            name={testimonial.name}
            title={testimonial.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
