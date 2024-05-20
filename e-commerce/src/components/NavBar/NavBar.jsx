import React from 'react'
import CartWidget from '../CartWidget/CartWidget.jsx'

const NavBar = () => {
    return (
        <nav>
            <h2>MiBian</h2>
            <div>
                <button>Indumentaria</button>
                <button>Calsado</button>
                <button>Deportes</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar