export const Button = ({
  color,
  text,
  icon,
  width,
  textColor,
  alt,
  borderRadius,
  fontWeight
}) => {
  return (
    <button
      className="btn"
      style={{
        backgroundColor: color,
        width: width,
        color: textColor,
        borderRadius: borderRadius,
        fontWeight: fontWeight
      }}
    >
      <img src={icon} alt={alt} />
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: '#fff',
  textColor: '#000'
};
