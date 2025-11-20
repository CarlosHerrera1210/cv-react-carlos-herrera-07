import { cvData } from "./data/cvData";

import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";
import StackTecnologias from "./components/StackTecnologias";
import Proyectos from "./components/Proyectos";
import Habilidades from "./components/Habilidades";

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

      <StackTecnologias tecnologias={cvData.tecnologias} />

      <Proyectos proyectos={cvData.proyectos} />

      <Habilidades habilidades={cvData.habilidades} />
    </div>
  );
}
