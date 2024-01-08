const Button = ({ type, title, variant }) => {
  return (
    <button className={`flexCenter gap-2.5 ${variant} `} type={type}>
      <label className="regular-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
