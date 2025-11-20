export default function Experiencia({ experiencias }) {
  return (
    <section>
      <h3>Experiencia Laboral</h3>

      {experiencias.map((exp, i) => (
        <div key={i}>
          <strong>{exp.cargo}</strong> — {exp.empresa}
          <p>{exp.periodo}</p>
        </div>
      ))}

      <hr />
    </section>
  );
}
