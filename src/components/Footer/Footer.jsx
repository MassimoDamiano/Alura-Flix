import React from 'react'
import "../reset.css"
import styled from 'styled-components'

const Containerr = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    max-width:100%;
    padding: 20px;
    margin-top: 70px;
    align-items: flex-end;

`

function Footer() {

  
  
  return (
    <Containerr>
        <img src="/images/Logo.png" alt="Logo" />
    </Containerr>
  )
}

export default Footer