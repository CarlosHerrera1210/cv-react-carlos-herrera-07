export default function StackTecnologias({ tecnologias }) {
  return (
    <section>
      <h3>Tecnologías</h3>
      <ul>
        {tecnologias.map((tec, i) => (
          <li key={i}>{tec}</li>
        ))}
      </ul>
      <hr />
    </section>
  );
}
