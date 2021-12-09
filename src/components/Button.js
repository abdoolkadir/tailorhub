export const Button = ({ color, text, icon, width, textColor }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color, width: width, color: textColor }}
    >
      <img src={icon} style={{ marginRight: '25px' }} />
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: '#fff',
  textColor: '#000'
};
