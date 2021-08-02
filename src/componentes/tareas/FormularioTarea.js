import React ,{useState} from 'react'

const FormularioTarea=({create}) =>{
    const [NuevaTarea, setNuevaTarea] = useState('')

    const Tarea = e => setNuevaTarea(e.target.value)

    const Click = () =>{
        create(NuevaTarea)
        setNuevaTarea('')
    }


 
    return (
        
        <div className= "border border-light mt-2">
            <h2 className= "text-dark fw-bold fs-1 text-center mb-0 mt-2">Formulario de Tareas</h2>
            <form className= "">
                <div className= 'row'>
                <div className = 'cold-md-12'>
                    <div className= "input-group mb-2">
                        <div className= "input-group-prepend">
                            <span className= "input-group-text text-danger fs-2 fw-bold" >&#128194;</span> 
                        </div>
                        <input
                            type="text"
                            className="form-control fs-2"
                            placeholder="Nombre de la tarea"
                            name="nombre"
                            value = {NuevaTarea}
                            onChange= {Tarea}
                        />
                    </div>
                </div>
                </div>
                <div className='row'>
                    <div className = 'cold-md-12 text-center mb-4'>
                        <div className="d-grid">
                        <button type="button" className="btn-dark bg-gradient fs-2 " onClick={Click} > Guardar Tarea</button>
                    </div>
                    </div>
                </div>
            </form>

        </div>
        

    )
}


export default FormularioTarea