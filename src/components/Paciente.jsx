import React from 'react'

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    const handleEliminar = () => {
        const respuesta = confirm("Desea eliminar el paciente " + paciente.nombre + "?")

        if (respuesta) {
            eliminarPaciente(paciente.id)
        }
    }

    return (
        <div className="bg-pink-100 shadow-md rounded-md py-10 px-5 mb-3">
            <p className="font-bold mb-3 uppercase">
                Nombre: {""}
                <span className="text-green-900 normal-case">{paciente.nombre}</span>
            </p>

            <p className="font-bold mb-3 uppercase">
                Padre: {""}
                <span className="font-normal normal-case">{paciente.padre}</span>
            </p>

            <p className="font-bold mb-3 uppercase">
                Mail: {""}
                <span className="font-normal normal-case">{paciente.mail}</span>
            </p>

            <p className="font-bold mb-3 uppercase">
                Fecha de alta: {""}
                <span className="font-normal normal-case">{paciente.alta}</span>
            </p>

            <p className="font-bold mb-3 uppercase">
                Síntomas: {""}
                <span className="font-normal normal-case">{paciente.sintomas}</span>
            </p>

            <div className='flex justify-between mt-10'>
                <button
                    className="py-2 px-10 bg-pink-300 hover:bg-pink-600 uppercase font-bold rounded-md"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>

                <button 
                    className="py-2 px-10 bg-orange-300 hover:bg-orange-600 uppercase font-bold rounded-md"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>

        </div>
    )
}

export default Paciente