const Button = ({ onPress, text, style }) => {
  return (
    <button
      className={`bg-gradient-to-r transition-colors hover:scale-95 hover:from-primary hover:to-primaryDark from-primaryDark to-primary rounded-md text-white px-8 text-base py-4 font-bold ${style}`}
      onClick={onPress}
    >
      {text}
    </button>
  );
};

export default Button;
