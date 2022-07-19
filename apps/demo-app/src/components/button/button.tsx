const btnStyle = {
  height: '32px',
  width: '32px',
};

const Button = ({ onClick, label }) => {
  return (
    <button onClick={onClick} style={btnStyle}>
      {label}
    </button>
  );
};

export default Button;
