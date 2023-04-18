import InputField from "./InputField";
import SelectField from "./SelectField";

const Form = ({ onSubmit }) => {
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // Handle form submission
  //     console.log("submitted");
  //   };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <InputField label="Name" id="name" type="text" />
      <InputField label="Email" id="email" type="email" />
      <InputField label="Phone Number" id="phone" type="tel" />
      <SelectField
        label="Source"
        id="source"
        options={[
          "Facebook",
          "LinkedIn",
          "YouTube",
          "Google",
          "Word of mouth",
          "Other",
        ]}
      />
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
