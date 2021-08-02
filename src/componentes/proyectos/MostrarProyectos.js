import React,{useState} from 'react' 
import Proyecto from './Proyecto' 
import CrearProyecto from './CrearProyecto'


const MostrarProyectos = () => {
    const [data,setData] = useState([
       
        {nombre: 'Tienda virtual'},
        {nombre: 'Intranet'},
        {nombre: 'Diseño de un sitio web'},
        {nombre: 'app inventario'},
        
    ])

    const NewPro = name => {
        if (name === ''){
            alert("Digite el texto")
            return;
        }
        if (!data.find(Pj => Pj.nombre === name)){
            setData([...data, {nombre: name}])
        }else{
            alert("No se puede repetir el mismo proyecto")
        }
    }
    return (
        <div>
        <CrearProyecto New= {NewPro}/>
        <h3 className="text-light border-bottom fw-bold">Panel De Proyectos</h3>
        <div className= "List-group"> 
            {data.map(proyecto => (
              <Proyecto proyecto = {proyecto}/>
            
            ))}

            </div>
        </div>
        
    )
   
    
}

export default MostrarProyectos