import React, {} from 'react' 
import { useState } from "react"

const Header = () => {
    const [user, setUser] = useState(null)

    const login = () => {
      setUser({id:1,nombre:"Campoverde_Coello_Chancay"})
    }
    const logout = () => {
      setUser(null)
    }
    return(
        <header className="d-flex justify-content-between p-4 bg-success bg-gradient navbar-expand-lg  ">
        <div className="d-flex container-fluid  h3 text-warning bg-gradient ">
          <span>Usuario: {user? user.nombre : "Desconocido"}</span>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-md-end " >
            {user 
                ? (<button 
                      className="btn btn-outline-dark text-white " 
                      type="Button" 
                      onClick = {logout} >Cerrar Sesion 
              </button>)
                : (<button 
                      className="btn btn-outline-dark  text-white " 
                      type="Button" 
                      onClick = {login} >Iniciar Sesion
              </button>)
            }
          </div>
        </div>
      </header>
    )
}

export default  Header
