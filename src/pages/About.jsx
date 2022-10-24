import React from "react";
import Layout from "../components/common/Layout";
import Portrait from "../assets/Matt_large.png";
import SectionRow from "../components/common/SectionRow";

const About = () => {
  return (
    <Layout>
      <section className="flex flex-col justify-start items-start gap-4 sm:mt-12 sm:gap-8 lg:mt-48">
        <div className="text-4xl lg:text-5xl"> About Me </div>
        <SectionRow
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
      atque maxime sapiente hic! Dolore inventore cupiditate possimus?
      Numquam voluptas, sit cum obcaecati repellendus vel similique
      architecto nostrum natus porro. Mollitia temporibus nihil veniam
      officiis nesciunt hic consequatur reprehenderit autem corrupti
      voluptate est impedit eaque id, voluptas, ipsam nobis accusamus
      odio. Mollitia temporibus nihil veniam officiis nesciunt hic
      consequatur reprehenderit autem corrupti voluptate est impedit eaque
      id, voluptas, ipsam nobis accusamus odio."
          image={Portrait}
          imageName="Matthew's Portrait"
        />

        <SectionRow
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            atque maxime sapiente hic! Dolore inventore cupiditate possimus?
            Numquam voluptas, sit cum obcaecati repellendus vel similique
            architecto nostrum natus porro."
          image={Portrait}
          imageName="Matthew's Portrait"
          isReversed={true}
        />
      </section>
    </Layout>
  );
};

export default About;
