const InputField = ({ label, id, type }) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="w-full p-2 border-solid border-2 border-sky-500 rounded"
      />
    </div>
  );
};

export default InputField;
