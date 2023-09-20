import React from 'react'
import "./Banner.css"
import "../reset.css"

function Banner() {
  return (
    <div className='banner'>    
    <div className="banner-caja1">
        <h1 className="banner-title__category">Front End</h1>
        <h2>Challenge React</h2>
        <p>Este challenge es una forma de aprendizaje. 
            Es un mecanismo donde podrás comprometerte
             en la resolución de un problema para poder 
             aplicar todos los conocimientos adquiridos  
             en la formación React.</p>
    </div>
    <div className="banner-caja2">
        <img src="./images/player.png" alt="player" /></div>  
    </div>
  )
}

export default Banner