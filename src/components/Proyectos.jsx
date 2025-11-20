export default function Proyectos({ proyectos }) {
  return (
    <section>
      <h3>Proyectos</h3>

      {proyectos.map((p, i) => (
        <div key={i}>
          <strong>{p.nombre}</strong>
          <p>{p.descripcion}</p>
          <a href={p.link} target="_blank">
            Ver proyecto
          </a>
        </div>
      ))}

      <hr />
    </section>
  );
}
