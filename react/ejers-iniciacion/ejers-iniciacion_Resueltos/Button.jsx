const Button = ({ incremento, onClick }) => (
  <button onClick={() => onClick(incremento)}>
    +{incremento}
  </button>
);

export default Button;