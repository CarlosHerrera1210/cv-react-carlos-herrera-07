export default function Proyectos({ proyectos }) {
  return (
    <section>
      <h3>Proyectos</h3>
      <ul>
        {proyectos.map((p, i) => (
          <li key={i}>
            <strong>{p.nombre}</strong> — {p.descripcion}
            <br />
            <a href={p.link} target="_blank">
              Ver proyecto
            </a>
          </li>
        ))}
      </ul>
      <hr />
    </section>
  );
}
