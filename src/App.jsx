import { cvData } from "./data/cvData";

import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <CabeceraCV
        nombre={cvData.cabecera.nombre}
        cargo={cvData.cabecera.cargo}
        ciudad={cvData.cabecera.ciudad}
        contacto={cvData.cabecera.contacto}
      />

      <Perfil resumen={cvData.perfil} />

      <Experiencia experiencias={cvData.experiencia} />

      <Educacion estudios={cvData.educacion} />
    </div>
  );
}
