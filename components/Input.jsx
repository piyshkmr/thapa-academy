const Input = ({ placeholder, type }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      required
      className="px-8 py-6 md:text-lg text-base block w-full focus:border-primary focus:border-2 bg-card outline-none rounded-xl mb-4"
    />
  );
};

export default Input;
