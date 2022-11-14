// import { useState } from "react";
import ContactImage from "../assets/Contact us-amico.png";
// import Input from "../components/common/Input/Input";
import ContactCTA from "../components/common/CTA/ContactCTA";

// const initialState = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   message: "",
// };

const Contact = () => {
  // const [formData, setFormData] = useState(initialState);
  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // };

  return (
    <>
      <ContactCTA />
      <section className="flex flex-col justify-center items-center mt-48 gap-4 p-4  w-full sm:mt-52 sm:p-10 lg:mt-60">
        <section className="flex justify-center items-center mt-24 p-1 lg:w-3/4 xl:w-2/3">
          <img
            src={ContactImage}
            alt="Someone contacting the company via phone"
            className="w-full h-full aspect-square"
          />
        </section>
      </section>
    </>
    // <section className="flex flex-col justify-center items-center mt-48 gap-4 p-4  w-full sm:mt-52 sm:p-10 lg:mt-60">
    //   <form
    //     className=" flex flex-col w-full md:px-12 lg:px-20"
    //     onSubmit={handleSubmit}
    //   >
    //     <fieldset className="grid grid-cols-4 gap-4 p-4 rounded-md shadow-sm lg:grid-cols-6 lg:gap-16">
    //       <div className="space-y-4 mb-3 col-span-full lg:col-span-2 xl:col-span-3">
    //         <p className="text-4xl md:text-6xl"> Contact Us </p>
    //         <p className="text-sm md:text-lg">
    //           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
    //           fuga autem eum!
    //         </p>
    //       </div>
    //       <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4 xl:col-span-3">
    //         <Input
    //           type="text"
    //           name="firstName"
    //           label="First Name"
    //           placeholder="First Name"
    //           onChange={handleChange}
    //         />
    //         <Input
    //           type="text"
    //           name="lastName"
    //           label="Last Name"
    //           placeholder="Last Name"
    //           onChange={handleChange}
    //         />
    //         <div className="col-span-6">
    //           <Input
    //             type="email"
    //             name="Email"
    //             label="Email"
    //             placeholder="Email"
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <Input
    //           type="text"
    //           name="Message"
    //           label="Message"
    //           placeholder="Type your message"
    //           onChange={handleChange}
    //           messageField={true}
    //         />
    //       </div>
    //       <button
    //         type="submit"
    //         className="uppercase w-full col-span-4 rounded-md p-2 bg-primary text-text-main md:text-2xl lg:col-start-3 xl:col-start-4 xl:col-span-3"
    //       >
    //         Send
    //       </button>
    //     </fieldset>
    //   </form>
    //   <section className="flex justify-center items-center mt-24 p-1 lg:w-3/4 xl:w-2/3">
    //     <img
    //       src={ContactImage}
    //       alt="Someone contacting the company via phone"
    //       className="w-full h-full aspect-square"
    //     />
    //   </section>
    // </section>
  );
};

export default Contact;
