export default function Educacion({ items }) {
  return (
    <section>
      <h3>Educación</h3>
      <ul>
        {items.map((edu, index) => (
          <li key={index}>
            <strong>{edu.titulo}</strong> - {edu.institucion} ({edu.año})
          </li>
        ))}
      </ul>
      <hr />
    </section>
  );
}
