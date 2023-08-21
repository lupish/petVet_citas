import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
   pacientes.forEach(p => {
    console.log("paciente")
   });
    
    return (
        <div className="md:w-1/2 lg:w-3/5 mx-5 mb-10">
            {
                pacientes.length > 0 ? (
                    <>
                        <h2 className="font-black text-2xl text-center">Listado de pacientes</h2>

                        <p className="text-lg mt-5 font-bold text-center mb-10">
                            Administra tus {""}
                            <span className="text-green-900">pacientes</span>
                        </p>

                        {
                            pacientes.map(paciente => 
                                <Paciente 
                                    key={paciente.id} 
                                    paciente={paciente}
                                    setPaciente={setPaciente}
                                    eliminarPaciente={eliminarPaciente}
                                />
                            )
                        }
                    </>
                ) 
                : (
                    <>
                        <h2 className="font-black text-2xl text-center">Listado de pacientes</h2>

                        <p className="text-lg mt-5 font-bold text-center mb-10">
                            Agrega tu primer {""}
                            <span className="text-green-900">paciente</span>
                        </p>
                    </>
                )
            }


            
            
        </div>
    )
}

export default ListadoPacientes;