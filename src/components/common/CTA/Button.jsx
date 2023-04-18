const Button = ({ text = "button", type = "primary", onClick, buttonType }) => {
  let baseClassName =
    "flex justify-center items-center w-full p-4 rounded-xl cursor-pointer text-xl";
  let className = `bg-secondary border-none uppercase text-white`;
  if (type === "secondary") {
    className = `bg-transparent border border-solid border-dark-blue capitalize text-dark-blue`;
  }
  return (
    <button
      className={`${baseClassName} ${className}`}
      onClick={onClick}
      type={buttonType}
    >
      {text}
    </button>
  );
};

export default Button;
