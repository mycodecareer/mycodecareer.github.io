import HeaderNormal from "../../components/common/SectionHead/HeaderNormal";

const Testimonials = () => {
  return (
    <section className="container mx-auto px-4 py-8 mt-24">
      <HeaderNormal text="Testimonials" />
      <iframe
        title="wall-of-love"
        height="800px"
        id="testimonialto-my-code-career-tag-all-light-animated"
        src="https://embed-v2.testimonial.to/w/my-code-career?animated=on&theme=light&shadowColor=ffffff&speed=1&hideDate=on&hideSource&tag=all"
        frameborder="0"
        scrolling="no"
        width="100%"
      ></iframe>
    </section>
  );
};

export default Testimonials;
