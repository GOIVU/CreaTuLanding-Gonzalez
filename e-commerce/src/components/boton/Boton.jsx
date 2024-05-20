import React from 'react'

const Boton = () => {

    const handleClick = () =>
        alert("Bienvenido")

    return (
        <div>
            <button onClick={handleClick}>Inicio</button>
        </div>
    )
}

export default Boton