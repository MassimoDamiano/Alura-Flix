import React from 'react'
import "../reset.css"
import Button from '../Button/button'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ButtonHome = styled.button`
  padding: 10px 20px;
  border: 1px solid #fff;
  transform: scale(1.1);
  transition-duration:0.8s ;
  cursor: pointer;
  background-color: #000;
  color: #fff;
`

const ContainerHeader = styled.div`
  display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #000;
`


function Header() {
  return (
    <ContainerHeader className='container'>
        <Link to={"/"}>  <img src="/images/Logo.png" alt="Logo" /></Link>
       


       <Link to={"/nuevo-video"}><ButtonHome>Nuevo Video</ButtonHome> </Link>
    </ContainerHeader>
  )
  }

export default Header