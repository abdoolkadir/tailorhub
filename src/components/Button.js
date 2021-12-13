export const Button = ({ color, text, icon, width, textColor, alt }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color, width: width, color: textColor }}
    >
      <img src={icon} style={{ marginRight: '25px' }} alt={alt} />
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: '#fff',
  textColor: '#000'
};
