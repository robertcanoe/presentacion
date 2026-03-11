const Holi = ({ nombre = '' }) => (
  <div>
    <h3>Holi</h3>
    {nombre && <p>Hola {nombre}, ¿cómo estás?</p>}
    {!nombre && <p>Hola. No te conozco.</p>}
  </div>
);

export default Holi;
