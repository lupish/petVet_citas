import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  // campos formulario
  const [nombre, setNombre] = useState("");
  const [padre, setPadre] = useState("");
  const [mail, setMail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  // estado del formulario
  const [error, setError] = useState(false);

  useEffect( () => {
    console.log(paciente)
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPadre(paciente.padre)
      setMail(paciente.mail)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)
    return random + fecha
}

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, padre, mail, alta, sintomas].includes("")) {
      setError(true);
      return;
    } 
    setError(false);

    const pacienteNuevo = {
      nombre,
      padre,
      mail,
      alta,
      sintomas
    }
    if (paciente.id) {
      pacienteNuevo.id = paciente.id

      const pacientesActualizados = pacientes.map(p => p.id == pacienteNuevo.id ? pacienteNuevo : p);

      setPacientes(pacientesActualizados);
      
      // limpiar paciente a modificar
      setPaciente(paciente)
    }
    else {
      pacienteNuevo.id = generarId()
      setPacientes([...pacientes, pacienteNuevo]);
    }
    
    // limpiar el formulario
    setNombre("");
    setPadre("");
    setMail("");
    setAlta("");
    setSintomas("");
    
  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10">
      <h2 className="font-black text-2xl text-center">Seguimiento de paciente</h2>

      <p className="text-lg mt-5 font-bold text-center mb-10">
        Añade pacientes y {""}
        <span className="text-green-900">adminístralos</span>
      </p>

      <form
        onSubmit={ handleSubmit }
        className="bg-pink-100 shadow-md rounded-md py-10 px-5">
        <div className="mb-5">
          { 
            error && <Error><p>Todos los campos son obligatorios</p></Error>
          }

          <label htmlFor="nombre" className="block uppercase font-bold">
            Nombre de la mascota
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 p-2 mt-2 w-full rounded-md placeholder-gray-400"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="padre" className="block uppercase font-bold">
            Nombre del padre
          </label>
          <input
            id="padre"
            type="text"
            placeholder="Nombre del padre"
            className="border-2 p-2 mt-2 w-full rounded-md placeholder-gray-400"
            value={padre}
            onChange={ (e) => setPadre(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="mail" className="block uppercase font-bold">
            Mail
          </label>
          <input
            id="mail"
            type="mail"
            placeholder="Mail de contacto"
            className="border-2 p-2 mt-2 w-full rounded-md placeholder-gray-400"
            value={mail}
            onChange={ (e) => setMail(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block uppercase font-bold">
            Fecha de alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 p-2 mt-2 w-full rounded-md placeholder-gray-400"
            value={alta}
            onChange={ (e) => setAlta(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe los síntomas"
            className="border-2 p-2 mt-2 w-full rounded-md placeholder-gray-400"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value) }
          />
        </div>

        <input
          type="submit"
          className="border-2 p-3 w-full rounded-md font-bold uppercase bg-pink-300 hover:bg-pink-600 cursor-pointer transition-all"
          value={ paciente.id ? "Modificar paciente" : "Agregar paciente" }
        />
      </form>
    </div>
  )
}

export default Formulario