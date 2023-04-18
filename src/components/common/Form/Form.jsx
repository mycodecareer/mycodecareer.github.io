import InputField from "./InputField";
import SelectField from "./SelectField";
import Button from "../CTA/Button";

const Form = ({ onSubmit }) => {
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // Handle form submission
  //     console.log("submitted");
  //   };

  return (
    <form
      onSubmit={(event) => {
        onSubmit(event);
      }}
      className="space-y-4 m-4"
    >
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
      <Button text="Submit" type="secondary" buttonType="submit" />
    </form>
  );
};

export default Form;
