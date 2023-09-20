import React from 'react'
import "./Header.css"
import "../reset.css"
import Button from '../Button/button'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <div className='container'>
        <img src="/images/Logo.png" alt="Logo" />

        {/* <button className="negro">Nuevo video</button> */}

       <Link to={"/nuevo-video"}><Button className="gris">Nuevo Video</Button> </Link>
    </div>
  )
  }

export default Header