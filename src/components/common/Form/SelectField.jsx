const SelectField = ({ label, id, options }) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-2">
        {label}
      </label>
      <select
        id={id}
        className="w-full p-2 border-solid border-2 border-sky-500 rounded"
      >
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
